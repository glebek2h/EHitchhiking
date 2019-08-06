import {Injectable} from '@angular/core';
import {HALF_DAY, MIDNIGHT} from '@shared/constants/modal-constants';

@Injectable({
	providedIn: 'root',
})
export class UtilsService {
	static formatDate(date) {
		return new Date(date * 1000).toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		});
	}
	static setHoursToDate(formValue) {
		const date = formValue.departureDate;
		const time = formValue.departureTime;
		const arr = time.split(/:| /);
		let hours = +arr[0];
		const minutes = +arr[1];
		const midnight = arr[2];
		if (midnight === MIDNIGHT) {
			hours += HALF_DAY;
		}
		date.setHours(hours);
		date.setMinutes(minutes);
		return date;
	}
	constructor() {}
}
