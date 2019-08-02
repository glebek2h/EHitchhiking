import { ActiveTrip } from "@shared/models/active-trip";


export class ActiveTripsModalService {
	constructor() {}

	trips: ActiveTrip[] = [];

	getTrips() {
		return this.trips;
	}
	resetTripsList() {
		this.trips = [];
	}
}
