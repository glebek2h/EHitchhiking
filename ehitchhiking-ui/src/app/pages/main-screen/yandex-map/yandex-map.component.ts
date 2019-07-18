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

	tripDuration: string;

	currentMultiRoute;
	currentGeoPosition;
	activeRoutesCollection: any[] = []; // TODO

	@Input() userState: string;
	@Input() tripData: any; // TODO
	@Input() isSavedRoute: boolean;

	ngOnInit() {
		this.ymapsPromise = ymaps.load(this.apiURL);
		this.createMap();
		this.userState = 'passenger';
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.tripData && changes.tripData.currentValue) {
		  if(this.userState === 'driver')
      {
        this.myMap.geoObjects.remove(this.currentMultiRoute);
        this.addMultiRoute();
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
			this.activeRoutesCollection.push(this.currentMultiRoute);
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

	addMultiRoute() {
		this.ymapsPromise
			.then((maps) => {
				const multiRoute = new maps.multiRouter.MultiRoute(
					{
						referencePoints: [this.tripData.from, this.tripData.to],
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
						routeActiveStrokeColor: '#55773a',
						routeStrokeStyle: 'dot',
						routeStrokeWidth: 3,
					}
				);
				this.getInfoAboutRoute(multiRoute);
				this.myMap.geoObjects.add(multiRoute);
				this.currentMultiRoute = multiRoute;
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}

	getInfoAboutRoute(multiRoute) {
		multiRoute.events.add('update', (e) => {
			const activeRoute = multiRoute.getActiveRoute();
			this.tripDuration = activeRoute.properties.get('duration').text;
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
							this.tripData.timePicker +
							'</p>' +
							'<p>' +
							'<span>Departure date: </span>' +
							this.tripData.datePicker.toLocaleString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
								weekday: 'long',
							}) +
							'</p>' +
							'<p>' +
							'<span>Places: </span>' +
							this.tripData.placesSelect +
							'</p>' +
							'<p>' +
							'<span>Trip duration: </span>' +
							this.tripDuration,
					});
				} else {
					this.myMap.balloon.close();
				}
			});
		});
	}
}
