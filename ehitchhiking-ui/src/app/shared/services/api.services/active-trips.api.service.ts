import {Injectable} from '@angular/core';
import {ApiService} from '@shared/services/api.services/api.service';
import {Car} from '@shared/models/car';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {UserInfoTrip} from '@shared/models/user-info-trip';
import {ActiveTrip} from '@shared/models/active-trip';
import {UserService} from '@shared/services/user.service';
import {UtilsService} from '@shared/services/utils.service';

@Injectable()
export class ActiveTripsApiService {
	constructor(private apiService: ApiService, private userService: UserService, private utilService: UtilsService) {}

	mapActiveTrips(data: any): ActiveTrip[] {
		if (!data) {
			return [];
		}

		return data.map((trip) => {
		  debugger;
			return new ActiveTrip(
				trip.idTrip,
				trip.startPoint,
				trip.endPoint,
				trip.role,
				UtilsService.parseDate(trip.startTime),
				UtilsService.parseTime(trip.startTime),
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

	removeTripPassenger(tripId: number): Promise<boolean> {
		return this.sendRemoveRequestPassenger(tripId)
			.then((data) => data)
			.catch(() => false);
	}

	private sendRemoveRequestPassenger(tripId: number): Promise<boolean> {
		return this.apiService.doPut(URL_REGISTRY.ACTIVE_TRIPS.DELETE_TRIP_PASSENGER, {id: tripId});
	}

	removeTripDriver(tripId: number): Promise<boolean> {
		return this.sendRemoveRequestDriver(tripId)
			.then((data) => data)
			.catch(() => false);
	}

	private sendRemoveRequestDriver(tripId: number): Promise<boolean> {
		return this.apiService.doPut(URL_REGISTRY.ACTIVE_TRIPS.DELETE_TRIP_DRIVER, {id: tripId});
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
