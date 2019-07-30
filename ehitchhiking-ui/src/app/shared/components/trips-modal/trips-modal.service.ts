import {Trip} from './trips';
import {TripStatus} from '../../enums/TripStatus';
import {UserState} from '../../enums/UserState';
import {FormControl} from '@angular/forms';

export class TripsModalService {
	constructor() {}

	roles = [{value: 0, viewValue: 'Passenger'}, {value: 1, viewValue: 'Driver'}, {value: 2, viewValue: 'All'}];
	statusesTrip = [
		{value: 0, viewValue: 'Active'},
		{value: 1, viewValue: 'Completed'},
		{value: 2, viewValue: 'Declined'},
	];
	ratesTrip = [
		{value: 5, viewValue: '5'},
		{value: 4, viewValue: '4'},
		{value: 3, viewValue: '3'},
		{value: 2, viewValue: '2'},
		{value: 1, viewValue: '1'},
		{value: 0, viewValue: 'not rated'},
	];
	statusFilterConfig = {fieldName: 'status', isEnabled: false};
	ratingFilterConfig = {fieldName: 'rating', isEnabled: false};
	roleFilterConfig = {roleField: 'role', isEnable: false};

	trips: Trip[] = [
		{
			id: 0,
			startPoint: 'Mstislavca1',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 0,
			role: UserState.Driver,
		},
		{
			id: 1,
			startPoint: 'Mstislavca2',
			endPoint: 'Prospect Nezavisimosty',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 2,
			role: UserState.Passenger,
		},
		{
			id: 2,
			startPoint: 'Mstislavca3',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Completed,
			rating: 0,
			role: UserState.Passenger,
		},
		{
			id: 3,
			startPoint: 'Mstislavca4',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Completed,
			rating: 0,
			role: UserState.Driver,
		},
		{
			id: 4,
			startPoint: 'Mstislavca5',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 4,
			role: UserState.Passenger,
		},
		{
			id: 5,
			startPoint: 'Mstislavca5',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Completed,
			rating: 0,
			role: UserState.Driver,
		},
		{
			id: 6,
			startPoint: 'Mstislavca6',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 5,
			role: UserState.Driver,
		},
		{
			id: 7,
			startPoint: 'Mstislavca6',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 0,
			role: UserState.Passenger,
		},
		{
			id: 8,
			startPoint: 'Mstislavca6',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 1,
			role: UserState.Passenger,
		},
		{
			id: 9,
			startPoint: 'Mstislavca6',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 0,
			role: UserState.Driver,
		},
		{
			id: 10,
			startPoint: 'Mstislavca11',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 0,
			role: UserState.Passenger,
		},
		{
			id: 11,
			startPoint: 'Mstislavca12',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 0,
			role: UserState.Driver,
		},
	];

	getTrips() {
		return this.trips;
	}
	resetTripsList() {
		this.trips = [];
	}
}
