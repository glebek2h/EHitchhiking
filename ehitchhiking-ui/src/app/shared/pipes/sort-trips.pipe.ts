import {Pipe, PipeTransform} from '@angular/core';
import {TripHistory} from '@shared/interfaces/trip-history-interface';

@Pipe({
	name: 'sortTrips',
})
export class SortTripsPipe implements PipeTransform {
	sortTrips = [];

	transform(array: any, field: string, order: number = 1): any[] {
		if (!array) {
			return array;
		}
		this.sortTrips = array.slice();
		this.sortTrips.sort(function(a: TripHistory, b: TripHistory) {
			return (a[field] - b[field]) * order;
		});
		return this.sortTrips;
	}
}
