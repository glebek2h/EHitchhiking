import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import ymaps from 'ymaps';
import {UserState} from '../../../shared/enums/UserState';
import {YandexMapService} from './yandex-map.service';
import MultiRouteModel = ymaps.multiRouter.MultiRouteModel;
import {Route} from '@pages/main-screen/Route';
import {ActiveTripsMapService} from "@shared/services/active-trips-map.service";

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'yandex-map',
	templateUrl: './yandex-map.component.html',
	styleUrls: ['./yandex-map.component.sass'],
})
export class YandexMapComponent implements OnInit, OnChanges {

	static readonly API_URL = 'https://api-maps.yandex.ru/2.1/?apikey=05c4e476-2248-4d27-836c-4a6c7c45e485&lang=en_US';
	static readonly ROUTES_ON_MAP_COUNT = 3;

	myMap;
	ymapsPromise;
	currentMultiRoute: MultiRouteModel; // маршрут яндекс api
	currentRoute: Partial<Route>; // 'интерфейс' маршрута
	currentGeoPosition;
	colors: string[] = YandexMapService.COLORS;
	myMark;

  marker: boolean;
  routeFromActiveModalToDisplay: Partial<Route>;

  @Output() passengerPlaceMark = new EventEmitter<boolean>();
	@Input() routes: Partial<Route>[]; // 'интерфейсы' маршрутов, которые ещё нужно построить
  @Input() userState: UserState;
	@Input() tripState: number;
	@Input() tripData: Route;
	@Input() isSavedRoute: boolean;
	@Input() triggers: any;
  @Input() redraw: any;
  @Input() indexRouteToDisplay: any;

  constructor(private activeTripsMapService: ActiveTripsMapService) {
    this.activeTripsMapService.getMessage().subscribe((route) => {
      console.log(route);
      this.routeFromActiveModalToDisplay = route;
    });
  }

	ngOnInit() {
		this.ymapsPromise = ymaps.load(YandexMapComponent.API_URL);
		this.createMap();
    this.userState = UserState.Passenger;
    this.routes.forEach((route, i) => {
      route.displayed = i < YandexMapComponent.ROUTES_ON_MAP_COUNT;
    });
    this.marker = true;
	}

	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	placeMarkForPassenger() {
		this.ymapsPromise.then((maps) => {
			const myGeoObject = new maps.GeoObject(
				{
					geometry: {
						type: 'Point',
						coordinates: [53.9, 27.5666],
					},
					properties: {
						hintContent: 'Ну давай уже тащи',
					},
				},
				{
					preset: 'islands#yellowPersonIcon',
					draggable: true,
				}
			);
			this.myMap.geoObjects.add(myGeoObject);
			this.myMark = myGeoObject;

			myGeoObject.events.add('dragend', (event) => {
				this.currentRoute.passengers[0] = {passanger: 'gleb', coordinates: this.myMark.geometry._coordinates}; // TODO:0 is bad
        this.passengerPlaceMark.emit(false);
			});
		});
	}

	ngOnChanges(changes: SimpleChanges) {
    if (changes.indexRouteToDisplay && this.marker) {
      const i = this.indexRouteToDisplay.value;
      if (this.routes[i].displayed) {
        this.addMultiRoute(i, false);
      } else {
        this.myMap.geoObjects.remove(this.routes[i].yandexRoute);
      }
      return;
    }
    if (changes.triggers && this.marker) {
      this.myMap.geoObjects.removeAll();
      if(this.routeFromActiveModalToDisplay){
        this.drawMultiRoute(this.routeFromActiveModalToDisplay,false);
        this.routeFromActiveModalToDisplay = null;
      }
    }
    if (changes.redraw && changes.redraw.currentValue) {
      this.routes.forEach((route, i) => {
        if (i < YandexMapComponent.ROUTES_ON_MAP_COUNT) {
          this.addMultiRoute(i, false);
          route.displayed = true;
        } else {
          route.displayed = false;
        }
      });
      this.placeMarkForPassenger();
    }

		if (changes.tripData && changes.tripData.currentValue) {
      if (this.userState === UserState.Driver) {
				this.myMap.geoObjects.remove(this.currentMultiRoute);
        this.routes.push(this.tripData);
        this.addMultiRoute(this.routes.length - 1, true);
				return;
			}
      if (this.userState === UserState.Passenger) {
				for (let i = 0; i < YandexMapComponent.ROUTES_ON_MAP_COUNT; i++) {
          this.addMultiRoute(i, false);
        }
        this.placeMarkForPassenger();
      }
    }
		if (changes.userState && changes.userState.currentValue) {
			this.setUserIconToMapAccordingUserState();
		}
		if (changes.isSavedRoute && this.currentMultiRoute) {
			this.routes.push(this.tripData);
			this.myMap.geoObjects.remove(this.currentMultiRoute);
		}
	}

	createMap() {
		this.ymapsPromise
			.then((maps) => {
				this.myMap = new maps.Map(
					'map',
					{
						center: [53.9, 27.5666], // Minsk coordinates
						zoom: 10,
					},
					{searchControlProvider: 'yandex#search'}
				);
        this.myMap.controls.remove('geolocationControl');
        this.myMap.controls.remove('searchControl');
        this.myMap.controls.remove('rulerControl');
				maps.geolocation
					.get({
						mapStateAutoApply: true,
					})
					.then((result) => {
						this.currentGeoPosition = result.geoObjects;
						result.geoObjects.options.set('preset', 'islands#redPersonCircleIcon');
						this.myMap.geoObjects.add(this.currentGeoPosition);
					});
        // tslint:disable-next-line:no-unused-expression
				new maps.SuggestView('suggestions-to-input-from');
        // tslint:disable-next-line:no-unused-expression
				new maps.SuggestView('suggestions-to-input-to');
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}

  addMultiRoute(index: number, pointDraggable: boolean) {
		const color = this.colors[this.getRandomInt(0, 10)];
    this.routes[index].routeColor = color;
		this.ymapsPromise
			.then((maps) => {
				const multiRoute = new maps.multiRouter.MultiRoute(
					{
            referencePoints: [this.routes[index].from, this.routes[index].to],
						params: {
							results: 1,
						},
					},
					YandexMapService.routeOptions(color, pointDraggable)
				);
        this.setInfoAboutRoute(multiRoute, this.routes[index]);
				this.myMap.geoObjects.add(multiRoute);
				this.currentMultiRoute = multiRoute;
        this.currentRoute = this.routes[index];
				this.currentRoute.passengers = [];
        this.routes[index].yandexRoute = multiRoute;
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}

	setInfoAboutRoute(multiRoute, data: Partial<Route>) {
		multiRoute.events.add('update', (e) => {
			const activeRoute = multiRoute.getActiveRoute();
			data.tripDuration = activeRoute.properties.get('duration').text;
			activeRoute.events.add('mouseenter', () => {
				activeRoute.options.set('strokeWidth', 5);
				activeRoute.options.set('strokeColor', YandexMapService.ACTIVE_ROUTE_COLOR);
			});
			activeRoute.events.add('mouseleave', () => {
				activeRoute.options.unset('strokeColor');
			});
			activeRoute.events.add('click', (event) => {
				if (!this.myMap.balloon.isOpen()) {
					const coords = event.get('coords');
					this.myMap.balloon.open(coords, YandexMapService.baloonInfo(data));
					return;
				}
			});
		});
	}

	setUserIconToMapAccordingUserState() {
		if (!this.myMap) {
			return;
		}
		this.myMap.geoObjects.remove(this.currentGeoPosition);
		this.ymapsPromise.then((maps) => {
			maps.geolocation
				.get({
					mapStateAutoApply: true,
				})
				.then((result) => {
          if (this.userState === UserState.Driver) {
						result.geoObjects.options.set('preset', 'islands#redAutoCircleIcon');
					}
          if (this.userState === UserState.Passenger) {
						result.geoObjects.options.set('preset', 'islands#redPersonCircleIcon');
					}
					this.currentGeoPosition = result.geoObjects;
					this.myMap.geoObjects.add(this.currentGeoPosition);
				});
		});
	}

  placeStaticMark(coords) {
    this.ymapsPromise.then((maps) => {
      const myGeoObject = new maps.GeoObject(
        {
          geometry: {
            type: 'Point',
            coordinates: [coords[0], coords[1]],
          },
        },
        {
          preset: 'islands#yellowPersonIcon',
          draggable: true,
        }
      );
      this.myMap.geoObjects.add(myGeoObject);
    });
  }

  drawMultiRoute(data, pointDraggable: boolean) {
    const color = this.colors[this.getRandomInt(0, 10)];
    data.routeColor = color;
    this.ymapsPromise
      .then((maps) => {
        const multiRoute = new maps.multiRouter.MultiRoute(
          {
            referencePoints: [data.from, data.to],
            params: {
              results: 1,
            },
          },
          YandexMapService.routeOptions(color, pointDraggable)
        );
        this.setInfoAboutRoute(multiRoute, data);
        this.myMap.geoObjects.add(multiRoute);
        data.passengers.forEach((passenger)=>{
          this.placeStaticMark(passenger.markCoordinate);
        });
      })
      .catch((error) => console.log('Failed to load Yandex Maps', error));
  }
}
