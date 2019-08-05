import {ApiService} from './api.services/api.service';
import {UserService} from './user.service';
import {TripHistory} from '@shared/interfaces/trip-history-interface';
import {Injectable} from '@angular/core';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {UserState} from '@shared/enums/UserState';

@Injectable()
export class TripsModalService {
	constructor(private apiService: ApiService, private userService: UserService) {}

	roles = [{value: 1, viewValue: 'Passenger'}, {value: 2, viewValue: 'Driver'}];
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
	roleFilterConfig = {fieldName: 'role', isEnabled: false, selected: []};

	getTrips(): Promise<TripHistory[]> {
		return this.apiService
			.doGet(URL_REGISTRY.HISTORY, false, {id: this.userService.getCurrentUser().id})
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
			.doDelete(URL_REGISTRY.HISTORY, {id: this.userService.getCurrentUser().id})
			.then((data) => {
				if (!data) {
					return false;
				}
				return true;
			})
			.catch(() => false);
	}

	updateSavedState(tripId: number, role: UserState, currentState: boolean): Promise<boolean> {
		const roleUrl = role === UserState.Driver ? URL_REGISTRY.DRIVER.TRIP : URL_REGISTRY.PASSENGER.TRIP;
		const urlPath = currentState ? roleUrl.REMOVE_FROM_SAVED : roleUrl.SAVE;
		return this.apiService
			.doPut(urlPath, {id: tripId})
			.then((data) => {
				if (!data) {
					return currentState;
				}
				return data.saved;
			})
			.catch(() => currentState);
	}
}
