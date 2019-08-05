import {Pipe, PipeTransform} from '@angular/core';
import {UserState} from '../enums/UserState';

@Pipe({
	name: 'filterByRole',
})
export class FilterByRolePipe implements PipeTransform {
	transform(array: any, role: string, selectedRole: number = UserState.All, isEnabled: boolean = false): any[] {
		if (!array || !isEnabled || selectedRole === UserState.All) {
			return array;
		}
		return array.filter((trip) => trip[role] === selectedRole);
	}
}
