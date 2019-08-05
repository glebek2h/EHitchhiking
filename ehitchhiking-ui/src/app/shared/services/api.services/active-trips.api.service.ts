import {Injectable} from '@angular/core';
import {ApiService} from '@shared/services/api.services/api.service';
import {Car} from '@shared/models/car';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {UserInfoTrip} from '@shared/models/user-info-trip';
import {ActiveTrip} from '@shared/models/active-trip';
import {UserService} from '@shared/services/user.service';

@Injectable()
export class ActiveTripsApiService {
	constructor(private apiService: ApiService, private userService: UserService) {}

	mapActiveTrips(data: any): ActiveTrip[] {
		if (!data) {
			return [];
		}

		return data.map((trip) => {
			return new ActiveTrip(
				trip.idTrip,
				trip.startPoint,
				trip.endPoint,
				trip.role,
				ActiveTripsApiService.parseDate(trip.startTime),
				ActiveTripsApiService.parseTime(trip.startTime),
				trip.seats,
				false,
				new UserInfoTrip(trip.driver.id, trip.driver.firstName, trip.driver.phone, trip.driver.email),
				new Car(trip.car.id, trip.car.model, trip.car.color, trip.car.number),
				ActiveTripsApiService.mapTripPassengers(trip.passList)
			);
		});
	}

	getActiveTrips(): Promise<ActiveTrip[]> {
		return this.apiService
			.doGet(URL_REGISTRY.ACTIVE_TRIPS.GET, false, {id: this.userService.getCurrentUser().id})
			.then(this.mapActiveTrips)
			.catch(() => []);
	}

	removeTripPassenger(tripId: any): Promise<boolean> {
		return this.sendRemoveRequestPassenger({id: tripId})
			.then((data) => data)
			.catch(() => false);
	}

	private sendRemoveRequestPassenger(tripId: any): Promise<boolean> {
		return this.apiService.doPut(URL_REGISTRY.ACTIVE_TRIPS.DELETE_TRIP_PASSENGER, tripId);
	}

	removeTripDriver(tripId: any): Promise<boolean> {
		return this.sendRemoveRequestDriver({id: tripId})
			.then((data) => data)
			.catch(() => false);
	}

	private sendRemoveRequestDriver(tripId: any): Promise<boolean> {
		return this.apiService.doPut(URL_REGISTRY.ACTIVE_TRIPS.DELETE_TRIP_DRIVER, tripId);
	}

	private static parseDate(date: any): string {
		return new Date(date * 1000).toLocaleDateString();
	}

	private static parseTime(date: any): string {
		return new Date(date * 1000).toLocaleTimeString();
	}

	private static mapTripPassengers(data: any): UserInfoTrip[] {
		if (!data) {
			return [];
		}
		return data.map((passenger) => {
			return new UserInfoTrip(passenger.id, passenger.firstName, passenger.phone, passenger.email);
		});
	}
}
