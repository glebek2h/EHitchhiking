import {Pipe, PipeTransform} from '@angular/core';
import {Trip} from '@shared/components/trips-modal/trips';

@Pipe({
	name: 'filterByRating',
})
export class FilterByRatingPipe implements PipeTransform {
	transform(array: Trip[], fieldName: string, selectedRating: number[], isEnabled: boolean = false): Trip[] {
		if (!array || !isEnabled) {
			return array;
		}
		return array.filter((trip) => selectedRating.includes(trip.rating));
	}
}
