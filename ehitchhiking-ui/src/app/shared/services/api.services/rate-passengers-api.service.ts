import {ApiService} from '@shared/services/api.services/api.service';
import {Injectable} from '@angular/core';
import {User, BlacklistedUser} from '@shared/components/rate-passengers-modal/user';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

@Injectable()
export class RatePassengersApiService {
	constructor(private apiService: ApiService) {}

	addRatePassenger(users: User[]) {
		this.apiService.doPut(URL_REGISTRY.RATE.ADD_RATE_PASSENGER, users);
	}

	addRateDriver(users: User[]) {
		this.apiService.doPut(URL_REGISTRY.RATE.ADD_RATE_DRIVER, users);
	}

	addBlacklistPass(id: number, params: BlacklistedUser[]): Promise<any> {
		return this.apiService.doPut(URL_REGISTRY.RATE.ADD_BLACKLIST_PASS, {idTrip: id, data: params});
	}

	addBlacklistDriver(id: number, params: BlacklistedUser[]): Promise<any> {
		return this.apiService.doPut(URL_REGISTRY.RATE.ADD_BLACKLIST_DRIVER, {idTrip: id, data: params});
	}

	mapTripPassengers(data: any): RatedUser[] {
		if (!data) {
			return [];
		}
		if (!Array.isArray(data)) {
			return [{id: data.id, name: data.firstName + ' ' + data.lastName, rate: 0, isBlocked: false}];
		}
		return data.map((obj) => ({id: obj.id, name: `${obj.firstName}  ${obj.lastName}`, rate: 0, isBlocked: false}));
	}

	mapTripDrivers(data: any): RatedUser[] {
		if (!data) {
			return [];
		}
		if (!Array.isArray(data)) {
			return [{id: data.id, name: data.firstName + ' ' + data.lastName, rate: 0, isBlocked: false}];
		}
		return data.map((obj) => ({
			id: obj.id,
			name: `${obj.firstName}  ${obj.lastName}`,
			rate: 0,
			isBlocked: false,
		}));
	}

	getTripPassengers(id: number): Promise<RatedUser | RatedUser[]> {
		return this.apiService
			.doGet(URL_REGISTRY.RATE.GET_RATE_PASSENGERS, false, {tripId: id})
			.then(this.mapTripPassengers);
	}

	getTripDriver(id: number): Promise<RatedUser | RatedUser[]> {
		return this.apiService.doGet(URL_REGISTRY.RATE.GET_RATE_DRIVER, false, {tripId: id}).then(this.mapTripDrivers);
	}
}
