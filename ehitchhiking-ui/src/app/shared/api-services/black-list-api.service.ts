import {User} from '@shared/models/user';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from '@shared/services/api.service';
import {Car} from '@shared/models/car';
import {map} from 'rxjs/operators';

export class BlackListApiService {
	constructor(private apiService: ApiService) {}

	makeArrayPassengers(data) {
		let blacklistPass = [];
		data.forEach((obj) => {
			blacklistPass.push(
				new User(obj.id, obj.firstName + ' ' + obj.lastName, '', obj.email, '', [
					new Car('ferrari', 'pink', 'A3434B', 1),
				])
			);
		});
		return blacklistPass;
	}

	makeArrayDrivers(data) {
		let blacklistDrives = [];
		data.map(function(obj) {
			blacklistDrives.push(
				new User(obj.id, obj.firstName + ' ' + obj.lastName, '', obj.email, '', [
					new Car('ferrari', 'pink', 'A3434B', 1),
				])
			);
		});
		return blacklistDrives;
	}

	getBlockedPassengers(params: GetBlockedPassengersParams) {
		return this.apiService
			.doGet(URL_REGISTRY['blacklist.getPassengers'], false, params)
			.pipe(map((data) => this.makeArrayPassengers(data.body.data)));
	}

	getBlockedDrivers(params: GetBlockedDriversParams) {
		return this.apiService
			.doGet(URL_REGISTRY['blacklist.getDrivers'], false, params)
			.pipe(map((data) => this.makeArrayDrivers(data.body.data)));
	}

	deleteBlockedPassenger(params: DeleteBlockedPassengersParams) {
		return this.apiService.doDelete(URL_REGISTRY['blacklist.deletePass'], false, params);
	}

	deleteBlockedDriver(params: DeleteBlockedDriversParams) {
		return this.apiService.doDelete(URL_REGISTRY['blacklist.deleteDriver'], false, params);
	}
}
