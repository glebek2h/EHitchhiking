import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class UtilsService {
	static formatDate(date: Date) {
		return date.toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
		});
	}
	constructor() {}
}
