import {User} from '@shared/models/user';
import {ApiService} from '@shared/services/api.services/api.service';
import {Car} from '@shared/models/car';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {Injectable} from '@angular/core';

@Injectable()
export class BlackListApiService {
	constructor(private apiService: ApiService) {}

	mapBlackListUser(data: any): User[] {
		return data.map((obj) => {
			return new User(obj.id, `${obj.firstName}  ${obj.lastName}`, obj.lastName, '', obj.email, '', [
				new Car('ferrari', 'pink', 'A3434B'),
			]);
		});
	}

	getDriverBlacklist(params: GetBlockedUsersParams) {
		return this.apiService
			.doGet(URL_REGISTRY.BLACKLIST.GET_DRIVER_BLACKLIST, false, params, false)
			.then(this.mapBlackListUser);
	}

	getPassengerBlacklist(params: GetBlockedUsersParams) {
		return this.apiService
			.doGet(URL_REGISTRY.BLACKLIST.GET_PASSENGER_BLACKLIST, false, params, false)
			.then(this.mapBlackListUser);
	}

	deleteBlockedPassenger(params: DeleteBlockedUserParams) {
		return this.apiService.doDelete(URL_REGISTRY.BLACKLIST.DELETE_PASSENGER, params);
	}

	deleteBlockedDriver(params: DeleteBlockedUserParams) {
		return this.apiService.doDelete(URL_REGISTRY.BLACKLIST.DELETE_DRIVER, params);
	}
}
