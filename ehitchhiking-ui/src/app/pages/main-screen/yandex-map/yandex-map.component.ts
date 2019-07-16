import {Component, OnInit} from '@angular/core';
import ymaps from 'ymaps';
import {Map} from 'yandex-maps';

interface Point {
	latitude: number;
	longitude: number;
}

@Component({
	selector: 'yandex-map',
	templateUrl: './yandex-map.component.html',
	styleUrls: ['./yandex-map.component.sass'],
})
export class YandexMapComponent implements OnInit {
	constructor() {}

	apiURL =
		'https://api-maps.yandex.ru/2.1/?apikey=05c4e476-2248-4d27-836c-4a6c7c45e485&lang=ru_RU';

	startPoint: Point = {latitude: 53.893673, longitude: 27.545677};
	endPoint: Point = {latitude: 53.927566, longitude: 27.683619};
	numberOfSeats: string;
	tripDuration: number;

	myMap: any; // TODO: which type should i use?

	ymapsPromise;

	ngOnInit() {
		this.ymapsPromise = ymaps.load(this.apiURL);
		this.createMap();
	}

	createMap() {
		this.ymapsPromise
			.then((maps) => {
				this.myMap = new maps.Map(
					'map',
					{
						center: [55.776952, 37.389405],
						zoom: 7,
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
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}

	addMultiRoute() {
		ymaps
			.load(this.apiURL)
			.then((maps) => {
				const multiRoute = new maps.multiRouter.MultiRoute(
					{
						referencePoints: [
							'Минск, ул. Куприевича, 3',
							'Минск, просп. Независимости, 4',
						],
						params: {
							results: 2,
						},
					},
					{
						boundsAutoApply: true,

						editorMidPointsType: 'via', // редактирование
						editorDrawOver: false, // редактирование

            routeActiveStrokeWidth: 8,
            routeActiveStrokeStyle: 'solid',
            routeActiveStrokeColor: '#002233',
            // Внешний вид линий альтернативных маршрутов.
            routeStrokeStyle: 'dot',
            routeStrokeWidth: 3,
					}
				);

				// редактирование
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
				//

        this.getInfoAboutRoute(multiRoute);

				this.myMap.controls.add('routeButtonControl'); // form
				this.myMap.geoObjects.add(multiRoute);
				console.log(multiRoute.properties.get('duration'));
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}

	getInfoAboutRoute(multiRoute) {
    multiRoute.events.add('update', () => {
      // Получение списка построенных маршрутов.
      const routes = multiRoute.getRoutes();
      // Проход по коллекции маршрутов.
      // Для каждого маршрута подпишемся на события
      // 'mouseenter' и 'mouseleave'.
      routes.each((route) => {
        route.events.add('mouseenter', () => {
          // Получение ссылки на активный маршрут.
          const active = multiRoute.getActiveRoute();
          route.options.set('strokeWidth', 10);
          // Активный маршрут будет перекрашиваться в черный цвет.
          if (active === route) {
            route.options.set('strokeColor', '#000000');
          } else {
            route.options.set('strokeColor', '#FFFFFF');
          }
        });
        route.events.add('mouseleave', () => {
          route.options.unset('strokeWidth');
          route.options.unset('strokeColor');
        });
      });
    });
  }
}
