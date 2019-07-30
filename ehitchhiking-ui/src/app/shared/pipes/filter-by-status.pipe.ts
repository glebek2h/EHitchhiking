import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filterByStatus',
})
export class FilterByStatusPipe implements PipeTransform {
	transform(array: any, fieldName: string,  selectedStatus: [], isEnabled: boolean = false): any[] {
		if (!array || !isEnabled) {
			return array;
		}
		return array.filter((trip) => selectedStatus.some((status) => status === trip.status));
	}
}
