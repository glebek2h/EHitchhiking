import {Injectable} from '@angular/core';
import {ApiService} from '@shared/services/api.services/api.service';
import {Car} from '@shared/models/car';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {UserInfoTrip} from '@shared/models/user-info-trip';
import {ActiveTrip} from '@shared/models/active-trip';

@Injectable()
export class ActiveTripsApiService {
	constructor(private apiService: ApiService) {}

	mapActiveTrips(data: any): ActiveTrip[] {
		return data.map((obj) => {
			return new ActiveTrip(
				obj.id,
				obj.startPoint,
				obj.endPoint,
				obj.isFavorite,
				obj.status,
				obj.rating,
				obj.role,
				obj.date,
				obj.time,
				obj.reservedSeats,
				obj.showTripInfo,
				new UserInfoTrip('1', 'name', 'phone', 'e-mail', new Car('2', 'model', 'color', 'number')),
				[new UserInfoTrip('2', 'name2', 'phone2', 'email2')]
			);
		});
	}

	getActiveTrips(params: ActiveTrip) {
		return this.apiService
			.doGet(URL_REGISTRY.ACTIVE_TRIPS.GET_ACTIVE_TRIPS, false, params)
			.then(this.mapActiveTrips);
	}
}
