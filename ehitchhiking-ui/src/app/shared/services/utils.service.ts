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

	static parseDate(date: any): string {
		return new Date(date * 1000).toLocaleDateString();
	}

	static parseTime(date: any): string {
		return new Date(date * 1000).toLocaleTimeString();
	}
	constructor() {}
}
