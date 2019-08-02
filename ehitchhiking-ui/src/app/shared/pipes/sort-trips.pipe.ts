import {Pipe, PipeTransform} from '@angular/core';
import {Trip} from '../components/trips-modal/trips';

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
		this.sortTrips.sort(function(a: Trip, b: Trip) {
			return (a[field] - b[field]) * order;
		});
		return this.sortTrips;
	}
}
