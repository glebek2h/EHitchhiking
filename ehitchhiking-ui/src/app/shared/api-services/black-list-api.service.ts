import {Injectable} from '@angular/core';
import {User} from '@shared/models/user';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from '@shared/services/api.service';
import {Car} from '@shared/models/car';

@Injectable({
	providedIn: 'root',
})
export class BlackListApiService {
	BLACKLIST_PASSENGERS: User[] = [];
	BLACKLIST_DRIVERS: User[] = [];

	constructor(private apiService: ApiService) {}
	func1(data) {
		this.BLACKLIST_PASSENGERS.splice(0, this.BLACKLIST_PASSENGERS.length);
		data.forEach((obj) => {
			this.BLACKLIST_PASSENGERS.push(
				new User(obj.id, obj.firstName + ' ' + obj.lastName, '', obj.email, '', [
					new Car('ferrari', 'pink', 'A3434B', 1),
				])
			);
		});
	}

	func2(data) {
		console.log(data);
		while (this.BLACKLIST_DRIVERS.length > 0) {
			this.BLACKLIST_DRIVERS.pop();
		}
		// console.log(this.BLACKLIST_DRIVERS.length);
		data.forEach((obj) => {
			this.BLACKLIST_DRIVERS.push(
				new User(obj.id, obj.firstName + ' ' + obj.lastName, '', obj.email, '', [
					new Car('ferrari', 'pink', 'A3434B', 1),
				])
			);
		});
		// console.log(this.BLACKLIST_DRIVERS.length);
	}

	doGetPassengers(curUser: User) {
		this.apiService
			.doGet(URL_REGISTRY['blacklist.getPassengers'], false, {
				idDr: curUser.id,
			})
			.subscribe((data) => this.func1(data.body.data));
	}

	doGetDrivers(curUser: User) {
		this.apiService
			.doGet(URL_REGISTRY['blacklist.getDrivers'], false, {
				idDr: curUser.id,
			})
			.subscribe((data) => this.func2(data.body.data));
	}

	doDeletePassengers(item, curUser) {
		this.apiService
			.doDelete(URL_REGISTRY['blacklist.deletePass'], false, {
				idPas: this.BLACKLIST_PASSENGERS[item].id,
				idDr: curUser.id,
			})
			.subscribe(() => this.doGetPassengers(curUser));
	}

	doDeleteDriver(item, curUser) {
		this.apiService
			.doDelete(URL_REGISTRY['blacklist.deleteDriver'], false, {
				idPas: this.BLACKLIST_DRIVERS[item].id,
				idDr: curUser.id,
			})
			.subscribe(() => this.doGetDrivers(curUser));
	}
}
