import {Trip} from './trips';
import {TripStatus} from '../../enums/TripStatus';

export class TripsModalService {
	constructor() {}

	trips: Trip[] = [
		{id: 0, startPoint: 'Mstislavca1', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active},
		{id: 1, startPoint: 'Mstislavca2', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active},
		{id: 2, startPoint: 'Mstislavca3', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Completed},
		{id: 3, startPoint: 'Mstislavca4', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Completed},
		{id: 4, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined},
		{id: 5, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Completed},
		{id: 6, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined},
		{id: 7, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined},
		{id: 8, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined},
		{id: 9, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined},
		{id: 10, startPoint: 'Mstislavca11', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined},
		{id: 11, startPoint: 'Mstislavca12', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined},
	];

	getTrips() {
		return this.trips;
	}
	resetTripsList() {
		this.trips = [];
	}
}
