import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import ymaps from 'ymaps';
import {UserState} from '../../../shared/enums/UserState';
import {YandexMapService} from './yandex-map.service';
import MultiRouteModel = ymaps.multiRouter.MultiRouteModel;

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'yandex-map',
	templateUrl: './yandex-map.component.html',
	styleUrls: ['./yandex-map.component.sass'],
})
export class YandexMapComponent implements OnInit, OnChanges {
	constructor() {}

  static readonly API_URL = 'https://api-maps.yandex.ru/2.1/?apikey=05c4e476-2248-4d27-836c-4a6c7c45e485&lang=en_US';
	static readonly ROUTES_ON_MAP_COUNT = 3;

	myMap;
	ymapsPromise;
	currentMultiRoute: MultiRouteModel;
	currentGeoPosition;
	colors: string[] = YandexMapService.COLORS;

	@Input() routes: Partial<Route>[];
	@Input() userState: string;
	@Input() tripState: number;
	@Input() tripData: Route;
	@Input() isSavedRoute: boolean;

	ngOnInit() {
		this.ymapsPromise = ymaps.load(YandexMapComponent.API_URL);
		this.createMap();
		this.userState = UserState.passenger;
	}

	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.tripData && changes.tripData.currentValue) {
		  console.log(this.tripData)
			if (this.userState === UserState.driver) {
				this.myMap.geoObjects.remove(this.currentMultiRoute);
				this.addMultiRoute(this.tripData, true);
				return;
			}
			if (this.userState === UserState.passenger) {
				// фильтрация коллекции activeRoutesCollection
				for (let i = 0; i < YandexMapComponent.ROUTES_ON_MAP_COUNT; i++) {
					this.addMultiRoute(this.routes[i], false);
				}
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
				maps.geolocation
					.get({
						mapStateAutoApply: true,
					})
					.then((result) => {
						this.currentGeoPosition = result.geoObjects;
						console.log(result.geoObjects); //
						result.geoObjects.options.set('preset', 'islands#redPersonCircleIcon');
						this.myMap.geoObjects.add(this.currentGeoPosition);
					});
				new maps.SuggestView('suggestions-to-input-from');
				new maps.SuggestView('suggestions-to-input-to');
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}

	addMultiRoute(data: Partial<Route>, pointDraggable: boolean) {
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
				console.log(data);
				this.setInfoAboutRoute(multiRoute, data);
				this.myMap.geoObjects.add(multiRoute);
				this.currentMultiRoute = multiRoute;
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
          if (this.userState === UserState.driver) {
            result.geoObjects.options.set('preset', 'islands#redAutoCircleIcon');
          }
          if (this.userState === UserState.passenger) {
            result.geoObjects.options.set('preset', 'islands#redPersonCircleIcon');
          }
          this.currentGeoPosition = result.geoObjects;
          this.myMap.geoObjects.add(this.currentGeoPosition);
        });
    });
  }
}
