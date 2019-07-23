import {Trip} from './trips';
import {TripStatus} from '../../enums/TripStatus';

export class TripsModalService {
	constructor() {}

	trips: Trip[] = [
		{id: 0, startPoint: 'Mstislavca1', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active,rating: 0},
		{id: 1, startPoint: 'Mstislavca2', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active, rating: 0},
		{id: 2, startPoint: 'Mstislavca3', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Completed, rating: 0},
		{id: 3, startPoint: 'Mstislavca4', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Completed, rating: 0},
		{id: 4, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0},
		{id: 5, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Completed, rating: 0},
		{id: 6, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0},
		{id: 7, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0},
		{id: 8, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0},
		{id: 9, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0},
		{id: 10, startPoint: 'Mstislavca11', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0},
		{id: 11, startPoint: 'Mstislavca12', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0},
	];

	getTrips() {
		return this.trips;
	}
	resetTripsList() {
		this.trips = [];
	}
}
