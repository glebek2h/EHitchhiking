import {Injectable} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';
import {Car} from "@shared/models/car";

@Injectable({
	providedIn: 'root',
})
export class YandexMapService {
	constructor() {}

	static COLORS: string[] = [
		'#6da2e1',
		'#f20026',
		'#ff00d8',
		'#c06100',
		'#12c000',
		'#0008c0',
		'#c0bf68',
		'#00c09b',
		'#b500c0',
		'#7f4dc0',
	];
	static ACTIVE_ROUTE_COLOR = '#fb5b74';

	static DEFAULT_FILTER_CONFIG = {
    departureDate: new Date(-8640000000000000),
		_dateTo: new Date(8640000000000000),
		placesSelect: 10, driverRating: 0

  };

	static routeOptions(color: string, pointDraggable: boolean) {
		return {
			wayPointDraggable: pointDraggable,
			boundsAutoApply: true,
			editorMidPointsType: 'via',
			editorDrawOver: false,
			routeActiveStrokeWidth: 8,
			routeActiveStrokeStyle: 'solid',
			routeActiveStrokeColor: color,
			routeStrokeStyle: 'dot',
			routeStrokeWidth: 3,
		};
	}

	static baloonInfo(data: Partial<Route>) {
		return {
			contentHeader: 'Info about route',
			contentBody:
				'<p>' +
				'<span>Departure time: </span>' +
				data.departureTime +
				'</p>' +
				'<p>' +
				'<span>Departure date: </span>' +
				UtilsService.formatDate(data.departureDate) +
				'</p>' +
				'<p>' +
				'<span>Places: </span>' +
				data.placesSelect +
				'</p>' +
				'<p>' +
				'<span>Trip duration: </span>' +
				data.tripDuration +
        '</p>'+
        '<p>' +
          '<span>Car: </span>' +
        data.carsSelect.model +
        '</p>'
		};
	}

	static filterRoutes(routes, skip = 0, top = 10, filterConfig = YandexMapService.DEFAULT_FILTER_CONFIG) {
		if (typeof skip !== 'number' || typeof top !== 'number' || typeof filterConfig !== 'object') {
			return null;
		}
		filterConfig = {...YandexMapService.DEFAULT_FILTER_CONFIG, ...(filterConfig || {})};
		let filtered = routes.filter(
			(route) =>
				(new Date(route.departureDate) >= filterConfig.departureDate || !filterConfig.departureDate) &&
				(new Date(route.departureDate) <= filterConfig._dateTo || !filterConfig._dateTo) &&
				(route.placesSelect <= filterConfig.placesSelect || !filterConfig.placesSelect) &&
        (route.driverRating >= filterConfig.driverRating || !filterConfig.driverRating)
		);

		filtered = filtered
    // @ts-ignore
			.sort((a, b) => new Date(b.departureDate) - new Date(a.departureDate))
			.slice(skip, skip + top);
		return filtered;
	}

	static getSomeRoutes(): Partial<Route>[] {
		let routes: Partial<Route>[] = [];
		routes.push({
			from: 'Рождественская 106, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date('4/12/2017, 9:59 PM'),
			departureTime: '12:00 am',
			placesSelect: 2,
      driverRating: 1,
      carsSelect: new Car('ferrari', 'pink', 'A3434B', 1),
		});
		routes.push({
			from: 'Пионерская 30Б, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date('4/12/2019, 9:59 PM'),
			departureTime: '12:00 am',
			placesSelect: 4,
      driverRating: 3,
      carsSelect: 	new Car('lada', 'white', 'A3434B', 5),
		});
		routes.push({
			from: 'Шаранговича 62, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date('4/12/2012, 9:59 PM'),
			departureTime: '15:00 am',
			placesSelect: 3,
      driverRating: 3,
      carsSelect: new Car('tayota', 'yellow', 'A3434B', 3),
		});
		routes.push({
			from: 'Магнитная 8, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date('4/12/2010, 9:59 PM'),
			departureTime: '15:00 am',
			placesSelect: 4,
      driverRating: 4,
      carsSelect:  new Car('bmw', 'black', 'A3434B', 1),
		});
		routes.push({
			from: 'Подгорная 29, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date('1/12/2019, 9:59 PM'),
			departureTime: '15:00 am',
			placesSelect: 5,
      driverRating: 5,
      carsSelect:  new Car('bmw', 'black', 'A3434B', 1),
		});
		routes = this.filterRoutes(routes);
		return routes;
	}
}
