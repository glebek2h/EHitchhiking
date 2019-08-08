import {TripStatus} from './../enums/TripStatus';
import {Pipe, PipeTransform} from '@angular/core';
import {TripHistory} from '@shared/interfaces/trip-history-interface';

@Pipe({
	name: 'filterByStatus',
})
export class FilterByStatusPipe implements PipeTransform {
	transform(
		array: TripHistory[],
		fieldName: string,
		selectedStatus: TripStatus[],
		isEnabled: boolean = false
	): TripHistory[] {
		if (!array || !isEnabled) {
			return array;
		}
		return array.filter((trip) => selectedStatus.includes(trip.status));
	}
}
