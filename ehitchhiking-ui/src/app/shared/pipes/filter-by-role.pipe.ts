import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from "../components/trips-modal/trips";
import { UserState } from "../enums/UserState";


@Pipe({
  name: 'filterByRole'
})
export class FilterByRolePipe implements PipeTransform {
  transform(array: any, role: string, selectedRole: number = 2,  isEnabled: boolean = false): any[] {
    if (!array || !isEnabled || selectedRole === 2) {
      return array;
    }
    return array.filter(trip => trip[role] === selectedRole);
  }
}
