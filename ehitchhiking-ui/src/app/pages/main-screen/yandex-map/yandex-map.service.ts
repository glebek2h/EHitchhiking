import {Injectable} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';

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
				data.tripDuration,
		};
	}

	static getSomeRoutes(): Partial<Route>[] {
		const routes: Partial<Route>[] = [];
		routes.push({
			from: 'Рождественская 106, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date(),
			departureTime: '12:00 am',
			placesSelect: 2,
		});
		routes.push({
			from: 'Пионерская 30Б, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date(),
			departureTime: '12:00 am',
			placesSelect: 4,
		});
		routes.push({
			from: 'Шаранговича 62, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date(),
			departureTime: '15:00 am',
			placesSelect: 1,
		});
		routes.push({
			from: 'Магнитная 8, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date(),
			departureTime: '15:00 am',
			placesSelect: 1,
		});
		routes.push({
			from: 'Подгорная 29, Минск',
			to: 'Проспект Независимости 4, Минск',
			departureDate: new Date(),
			departureTime: '15:00 am',
			placesSelect: 1,
		});
		return routes;
	}
}
