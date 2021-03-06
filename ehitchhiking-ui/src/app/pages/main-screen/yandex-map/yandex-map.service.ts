import {Injectable} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';
import {Car} from '@shared/models/car';
import {Route} from '@pages/main-screen/Route';
@Injectable({
	providedIn: 'root',
})
export class YandexMapService {
	constructor() {}

	private ymapsPromise;

	setPromise(ymapsPromise) {
		this.ymapsPromise = ymapsPromise;
	}

	getPromise() {
		return this.ymapsPromise;
	}

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
		placesSelect: 10,
		driverRating: 0,
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
				'<span>Departure date: </span>' +
				UtilsService.formatDate(new Date(data.departureDate)) +
				'</p>' +
				'<p>' +
				'<span>Places: </span>' +
				data.placesSelect +
				'</p>' +
				'<p>' +
				'<span>Trip duration: </span>' +
				data.tripDuration +
				'</p>' +
				'<p>' +
				'<span>Car: </span>' +
				data.car.color +
				' ' +
				data.car.model +
				' ' +
				data.car.number +
				'</p>',
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
			placesSelect: 0,
			driverRating: 1,
			car: new Car('ferrari', 'pink', 'A3434B'),
		});
		routes.push({
			from: 'Пионерская 30Б, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date('4/12/2019, 9:59 PM'),
			departureTime: '12:00 am',
			placesSelect: 0,
			driverRating: 3,
			car: new Car('lada', 'white', 'A3434B'),
		});
		routes.push({
			from: 'Шаранговича 62, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date('4/12/2012, 9:59 PM'),
			departureTime: '15:00 am',
			placesSelect: 3,
			driverRating: 3,
			car: new Car('tayota', 'yellow', 'A3434B'),
		});
		routes.push({
			from: 'Магнитная 8, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date('4/12/2010, 9:59 PM'),
			departureTime: '15:00 am',
			placesSelect: 4,
			driverRating: 4,
			car: new Car('bmw', 'black', 'A3434B'),
		});
		routes.push({
			from: 'Подгорная 29, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date('1/12/2019, 9:59 PM'),
			departureTime: '15:00 am',
			placesSelect: 5,
			driverRating: 5,
			car: new Car('bmw', 'black', 'A3434B'),
		});
		routes = this.filterRoutes(routes);
		return routes;
	}
}
