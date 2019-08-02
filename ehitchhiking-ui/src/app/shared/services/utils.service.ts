import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class UtilsService {
	static formatDate(date) {
		return new Date(date  * 1000).toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
		});
	}
	constructor() {}
}
