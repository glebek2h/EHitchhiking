import {ApiService} from './api.services/api.service';
import {UserService} from './user.service';
import {TripHistory} from '@shared/interfaces/trip-history-interface';
import {Injectable} from '@angular/core';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

@Injectable()
export class TripsModalService {
	constructor(private apiService: ApiService, private userService: UserService) {}

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

	getTrips(): Promise<TripHistory[]> {
		return this.apiService
			.doGet(URL_REGISTRY.HISTORY, false, {id: 1})
			.then((data) => {
				if (!data) {
					return [];
				}
				return data;
			})
			.catch(() => []);
	}
	resetTripsList(): Promise<boolean> {
		return this.apiService
			.doDelete(URL_REGISTRY.HISTORY, {id: 1})
			.then((data) => {
				if (!data) {
					return false;
				}
				return true;
			})
			.catch(() => false);
	}
}
