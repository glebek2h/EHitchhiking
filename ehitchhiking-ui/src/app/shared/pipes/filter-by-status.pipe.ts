import {Pipe, PipeTransform} from '@angular/core';
import {Trip} from '@shared/components/trips-modal/trips';

@Pipe({
	name: 'filterByStatus',
})
export class FilterByStatusPipe implements PipeTransform {
	transform(array: Trip[], fieldName: string, selectedStatus: number[], isEnabled: boolean = false): Trip[] {
		if (!array || !isEnabled) {
			return array;
		}
		return array.filter((trip) => selectedStatus.includes(trip.status));
	}
}
