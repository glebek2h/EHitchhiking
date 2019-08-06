import {UserState} from './../enums/UserState';
import {Pipe, PipeTransform} from '@angular/core';
import {TripHistory} from '@shared/interfaces/trip-history-interface';

@Pipe({
	name: 'filterByRole',
})
export class FilterByRolePipe implements PipeTransform {
	transform(array: any, fieldName: string, selectedRole: UserState[], isEnabled: boolean = false): any[] {
		if (!array || !isEnabled) {
			return array;
		}
		console.log(selectedRole);
		return array.filter((trip) => selectedRole.includes(trip.role));
	}
}
