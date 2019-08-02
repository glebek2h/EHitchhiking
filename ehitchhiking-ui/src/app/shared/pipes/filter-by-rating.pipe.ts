import {Pipe, PipeTransform} from '@angular/core';
import {TripHistory} from '@shared/interfaces/trip-history-interface';

@Pipe({
	name: 'filterByRating',
})
export class FilterByRatingPipe implements PipeTransform {
	transform(
		array: TripHistory[],
		fieldName: string,
		selectedRating: number[],
		isEnabled: boolean = false
	): TripHistory[] {
		if (!array || !isEnabled) {
			return array;
		}
		return array.filter((trip) => selectedRating.includes(trip.rating));
	}
}
