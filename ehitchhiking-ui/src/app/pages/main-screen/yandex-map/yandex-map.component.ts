import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import ymaps from 'ymaps';

@Component({
	selector: 'yandex-map',
	templateUrl: './yandex-map.component.html',
	styleUrls: ['./yandex-map.component.sass'],
})
export class YandexMapComponent implements OnInit, OnChanges {
	constructor() {}

	apiURL =
		'https://api-maps.yandex.ru/2.1/?apikey=05c4e476-2248-4d27-836c-4a6c7c45e485&lang=ru_RU';
	myMap: any; // TODO: which type should i use?
	ymapsPromise;

	tripDuration: string;

	@Input() tripData: any; // TODO

	ngOnInit() {
		this.ymapsPromise = ymaps.load(this.apiURL);
		this.createMap();
	}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tripData && changes.tripData.currentValue) {
      console.log(this.tripData);
      this.addMultiRoute();
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
						this.myMap.geoObjects.add(result.geoObjects);
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
						referencePoints: [
							this.tripData.from,
              this.tripData.to,
						],
						params: {
							results: 2,
						},
					},
					{
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
				this.enableEditorMode(multiRoute, maps);
				this.getInfoAboutRoute(multiRoute);
				//this.myMap.controls.add('routeButtonControl'); // default yandex-trips form
				this.myMap.geoObjects.add(multiRoute);
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}
	enableEditorMode(multiRoute, maps) {
		const buttonEditor = new maps.control.Button({
			data: {content: 'Режим редактирования'},
		});
		buttonEditor.events.add('select', () => {
			multiRoute.editor.start({
				addWayPoints: true,
				removeWayPoints: true,
			});
		});
		buttonEditor.events.add('deselect', () => {
			multiRoute.editor.stop();
		});
		this.myMap.controls.add(buttonEditor);
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
						contentHeader: 'Информация о маршруте!',
						contentBody:
							'<p>' +
							'<span>Кол-во мест: </span>' + this.tripData.placesSelect +
							'</p>' +
							'<p>' +
							'<span>Длительность маршрута: </span>' +
							this.tripDuration,
					});
				} else {
					this.myMap.balloon.close();
				}
			});
		});
	}
}
