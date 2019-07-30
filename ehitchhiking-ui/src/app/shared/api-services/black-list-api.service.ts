import {User} from '@shared/models/user';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from '@shared/services/api.service';
import {Car} from '@shared/models/car';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class BlackListApiService {
	constructor(private apiService: ApiService) {}

	mapBlackListPassengers(data): User[] {
		return data.map((obj) => {
			return new User(obj.id, obj.firstName + ' ' + obj.lastName, '', obj.email, '', [
				new Car('ferrari', 'pink', 'A3434B', 1),
			]);
		});
	}

	mapBlacklistDrivers(data): User[] {
		return data.map((obj) => {
			return new User(obj.id, obj.firstName + ' ' + obj.lastName, '', obj.email, '', [
				new Car('ferrari', 'pink', 'A3434B', 1),
			]);
		});
	}

	getDriverBlacklist(params: GetBlockedPassengersParams) {
		return this.apiService
			.doGet(URL_REGISTRY['blacklist.getDriverBlacklist'], false, params)
			.pipe(map((data) => this.mapBlackListPassengers(data.body.data)));
	}

	getPassengerBlacklist(params: GetBlockedDriversParams) {
		return this.apiService
			.doGet(URL_REGISTRY['blacklist.getPassengerBlacklist'], false, params)
			.pipe(map((data) => this.mapBlacklistDrivers(data.body.data)));
	}

	deleteBlockedPassenger(params: DeleteBlockedPassengersParams) {
		return this.apiService.doDelete(URL_REGISTRY['blacklist.deletePass'], false, params);
	}

	deleteBlockedDriver(params: DeleteBlockedDriversParams) {
		return this.apiService.doDelete(URL_REGISTRY['blacklist.deleteDriver'], false, params);
	}
}
