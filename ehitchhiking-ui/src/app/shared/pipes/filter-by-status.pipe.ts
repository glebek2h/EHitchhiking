import {Pipe, PipeTransform} from '@angular/core';
import {TripHistory} from '@shared/interfaces/trip-history-interface';

@Pipe({
	name: 'filterByStatus',
})
export class FilterByStatusPipe implements PipeTransform {
	transform(
		array: TripHistory[],
		fieldName: string,
		selectedStatus: number[],
		isEnabled: boolean = false
	): TripHistory[] {
		if (!array || !isEnabled) {
			return array;
		}
		return array.filter((trip) => selectedStatus.includes(trip.status));
	}
}
