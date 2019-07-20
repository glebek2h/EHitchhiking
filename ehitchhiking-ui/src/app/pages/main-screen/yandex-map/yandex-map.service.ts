import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class YandexMapService {
	constructor() {}

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
		};
	}
}
