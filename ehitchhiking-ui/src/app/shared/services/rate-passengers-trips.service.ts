import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RatePassengersTripsService {
	private tripsId: number[] = [];

	addIdToTripsId(id: number) {
		this.tripsId.push(id);
	}

	getIsShown(id) {
		if (this.tripsId.find((i) => i === id)) {
			return false;
		}
		return true;
	}

	constructor() {}
}
