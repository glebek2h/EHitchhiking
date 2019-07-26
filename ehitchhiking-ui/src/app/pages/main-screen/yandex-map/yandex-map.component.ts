import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import ymaps from 'ymaps';
import {UserState} from '../../../shared/enums/UserState';
import {YandexMapService} from './yandex-map.service';
import MultiRouteModel = ymaps.multiRouter.MultiRouteModel;
import {DELETE_ROUTE_MARKER} from '../../../shared/constants/modal-constants';

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
	currentMultiRoute: MultiRouteModel; // маршрут яндекс api
	currentRoute: Partial<Route>; // 'интерфейс' маршрута
	currentGeoPosition;
	colors: string[] = YandexMapService.COLORS;
	myMark;

	yandexRoutesObjects: MultiRouteModel[] = []; // 'сами' маршруты яндекс api
	@Input() routes: Partial<Route>[]; // 'интерфейсы' маршрутов, которые ещё нужно построить

	@Input() userState: string;
	@Input() tripState: number;
	@Input() tripData: Route;
	@Input() isSavedRoute: boolean;
	@Input() triggers: any;
  @Input() redraw: any;
	@Input() indexRouteToDisplay: number;

	ngOnInit() {
		this.ymapsPromise = ymaps.load(YandexMapComponent.API_URL);
		this.createMap();
		this.userState = UserState.passenger;
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
			});
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.triggers && changes.triggers.currentValue) {
			this.yandexRoutesObjects.forEach((route) => this.myMap.geoObjects.remove(route));
		}
		if (changes.indexRouteToDisplay) {
			if (this.indexRouteToDisplay !== undefined && this.indexRouteToDisplay !== DELETE_ROUTE_MARKER) {
				this.addMultiRoute(this.routes[this.indexRouteToDisplay], false);
				this.placeMarkForPassenger();
			}
			if (this.indexRouteToDisplay === DELETE_ROUTE_MARKER) {
				this.myMap.geoObjects.remove(this.yandexRoutesObjects[0]);
				this.myMap.geoObjects.remove(this.myMark);
			}
		}

		if (changes.tripData && changes.tripData.currentValue) {
			if (this.userState === UserState.driver) {
				this.myMap.geoObjects.remove(this.currentMultiRoute);
				this.addMultiRoute(this.tripData, true);
				return;
			}
			if (this.userState === UserState.passenger) {
				for (let i = 0; i < YandexMapComponent.ROUTES_ON_MAP_COUNT; i++) {
				  console.log(this.routes[i]);
					this.addMultiRoute(this.routes[i], false);
				}
			}
		}
    if (changes.redraw && changes.redraw.currentValue || this.redraw === true) {
      for (let i = 0; i < YandexMapComponent.ROUTES_ON_MAP_COUNT; i++) {
        if(this.routes[i]) {
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
        this.myMap.controls.remove('geolocationControl');
        this.myMap.controls.remove('searchControl');
				maps.geolocation
					.get({
						mapStateAutoApply: true,
					})
					.then((result) => {
						this.currentGeoPosition = result.geoObjects;
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
				this.setInfoAboutRoute(multiRoute, data);
				this.myMap.geoObjects.add(multiRoute);
				this.yandexRoutesObjects.push(multiRoute);
				this.currentMultiRoute = multiRoute;
				//console.log(multiRoute.model.getReferencePoints());
				this.currentRoute = data;
				this.currentRoute.passengers = [];
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
