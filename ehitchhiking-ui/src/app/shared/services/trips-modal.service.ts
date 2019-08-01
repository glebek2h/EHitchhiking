import {HistoryModalApiService} from './api.services/history-modal.api.service';
import {TripHistory} from '@shared/interfaces/trip-history-interface';
import {Injectable} from '@angular/core';

@Injectable()
export class TripsModalService {
	constructor(private historyModalApiService: HistoryModalApiService) {}

	roles = [{value: 1, viewValue: 'Passenger'}, {value: 2, viewValue: 'Driver'}, {value: 3, viewValue: 'All'}];
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
	statusFilterConfig = {fieldName: 'status', isEnabled: false, selected: []};
	ratingFilterConfig = {fieldName: 'rating', isEnabled: false, selected: []};
	roleFilterConfig = {roleField: 'role', isEnable: false};

	trips: TripHistory[];

	getTrips() {
		return this.trips;
	}
	resetTripsList() {
		this.trips = [];
	}
}
