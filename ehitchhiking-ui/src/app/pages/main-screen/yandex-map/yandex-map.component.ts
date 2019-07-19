import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import ymaps from 'ymaps';


@Component({
	selector: 'yandex-map',
	templateUrl: './yandex-map.component.html',
	styleUrls: ['./yandex-map.component.sass'],
})
export class YandexMapComponent implements OnInit, OnChanges {
	constructor() {}

	apiURL =
		'https://api-maps.yandex.ru/2.1/?apikey=05c4e476-2248-4d27-836c-4a6c7c45e485&lang=en_US';
	myMap: any; // TODO: which type should i use?
	ymapsPromise;

	currentMultiRoute;
	currentGeoPosition;

	@Input() activeRoutesCollection: Partial<Route>[];
	@Input() userState: string;
	@Input() tripData: Route;
	@Input() isSavedRoute: boolean;

	static generateColor() {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	}

	ngOnInit() {
		this.ymapsPromise = ymaps.load(this.apiURL);
		this.createMap();
		this.userState = 'passenger';
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.tripData && changes.tripData.currentValue) {
			if (this.userState === 'driver') {
				this.myMap.geoObjects.remove(this.currentMultiRoute);
				console.log(this.tripData);
				this.addMultiRoute(this.tripData);
			}
			if (this.userState === 'passenger') {
				// нарисовать на карте 3 лучших маршрута и добавить кнопку "показать-больше"
				// фильтрация коллекции activeRoutesCollection
				for (let i = 0; i < 3; i++){
          this.addMultiRoute(this.activeRoutesCollection[i]);
        }
			}
		}
		if (changes.userState && changes.userState.currentValue) {
			console.log(this.userState);
			if (this.userState === 'driver') {
				this.myMap.geoObjects.remove(this.currentGeoPosition);
				this.ymapsPromise.then((maps) => {
					maps.geolocation
						.get({
							mapStateAutoApply: true,
						})
						.then((result) => {
							result.geoObjects.options.set(
								'preset',
								'islands#redAutoCircleIcon'
							);
							this.currentGeoPosition = result.geoObjects;
							this.myMap.geoObjects.add(this.currentGeoPosition);
						});
				});
			}
			if (this.userState === 'passenger') {
				this.myMap.geoObjects.remove(this.currentGeoPosition);
				this.ymapsPromise.then((maps) => {
					maps.geolocation
						.get({
							mapStateAutoApply: true,
						})
						.then((result) => {
							result.geoObjects.options.set(
								'preset',
								'islands#redPersonCircleIcon'
							);
							this.currentGeoPosition = result.geoObjects;
							this.myMap.geoObjects.add(this.currentGeoPosition);
						});
				});
			}
		}
		if (changes.isSavedRoute && this.currentMultiRoute) {
			this.activeRoutesCollection.push(this.tripData);
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
						result.geoObjects.options.set(
							'preset',
							'islands#redPersonCircleIcon'
						);
						this.myMap.geoObjects.add(this.currentGeoPosition);
					});
				new maps.SuggestView('suggest1');
				new maps.SuggestView('suggest2');
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}

	addMultiRoute(data: Partial<Route>) {
		const color = YandexMapComponent.generateColor();
		data.routeColor = color;
		this.ymapsPromise
			.then((maps) => {
				const multiRoute = new maps.multiRouter.MultiRoute(
					{
						referencePoints: [data.from, data.to], //
						params: {
							results: 2,
						},
					},
					{
						wayPointDraggable: true,
						boundsAutoApply: true,
						editorMidPointsType: 'via',
						editorDrawOver: false,
						routeActiveStrokeWidth: 8,
						routeActiveStrokeStyle: 'solid',
						routeActiveStrokeColor: color,
						routeStrokeStyle: 'dot',
						routeStrokeWidth: 3,
					}
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
				activeRoute.options.set('strokeColor', '#fb5b74');
			});
			activeRoute.events.add('mouseleave', () => {
				activeRoute.options.unset('strokeColor');
			});
			activeRoute.events.add('click', (event) => {
				if (!this.myMap.balloon.isOpen()) {
					const coords = event.get('coords');
					this.myMap.balloon.open(coords, {
						contentHeader: 'Info about route',
						contentBody:
							'<p>' +
							'<span>Departure time: </span>' +
							data.timePicker +
							'</p>' +
							'<p>' +
							'<span>Departure date: </span>' +
							data.datePicker.toLocaleString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
								weekday: 'long',
							}) +
							'</p>' +
							'<p>' +
							'<span>Places: </span>' +
							data.placesSelect +
							'</p>' +
							'<p>' +
							'<span>Trip duration: </span>' +
							data.tripDuration,
					});
				} else {
					this.myMap.balloon.close();
				}
			});
		});
	}
}
