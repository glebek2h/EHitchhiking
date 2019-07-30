import {User} from '@shared/models/user';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from '@shared/services/api.service';
import {Car} from '@shared/models/car';
import {map} from 'rxjs/operators';

export class BlackListApiService {
	constructor(private apiService: ApiService) {}

  makeArrayBlockedPassengers(data) {
		let blacklistDrivers = [];
		data.map(function(obj){
      blacklistDrivers.push(
				new User(obj.id, obj.firstName + ' ' + obj.lastName, '', obj.email, '', [
					new Car('ferrari', 'pink', 'A3434B', 1),
				])
			);
		});
		console.log("blacklistDR"+blacklistDrivers);
		return blacklistDrivers;
	}

	makeArrayDrivers(data) {
		let blacklistPassengers = [];
		data.map(function(obj) {
      blacklistPassengers .push(
				new User(obj.id, obj.firstName + ' ' + obj.lastName, '', obj.email, '', [
					new Car('ferrari', 'pink', 'A3434B', 1),
				])
			);
		});
    console.log("blacklistPAS"+blacklistPassengers);
		return blacklistPassengers ;
	}

  getPassengerBlacklist(params: GetBlockedPassengersParams) {
		return this.apiService
			.doGet(URL_REGISTRY['blacklist.getDriverBlacklist'], false, params)
			.pipe(map((data) => this.makeArrayBlockedPassengers(data.body.data)));
	}

  getDriverBlaclist(params: GetBlockedDriversParams) {
		return this.apiService
			.doGet(URL_REGISTRY['blacklist.getPassengerBlacklist'], false, params)
			.pipe(map((data) => this.makeArrayDrivers(data.body.data)));
	}

	deleteBlockedPassenger(params: DeleteBlockedPassengersParams) {
		return this.apiService.doDelete(URL_REGISTRY['blacklist.deletePass'], false, params);
	}

	deleteBlockedDriver(params: DeleteBlockedDriversParams) {
		return this.apiService.doDelete(URL_REGISTRY['blacklist.deleteDriver'], false, params);
	}
}
