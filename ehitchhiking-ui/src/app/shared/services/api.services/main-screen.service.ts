import {Injectable} from '@angular/core';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {map} from 'rxjs/operators';
import {Car} from '@shared/models/car';
import {ApiService} from '@shared/services/api.services/api.service';
import {UserService} from '@shared/services/user.service';

@Injectable({
	providedIn: 'root',
})
export class MainScreenService {
	constructor(private apiService: ApiService, private userService: UserService) {}

	parseDriverRoutes(data) {
		const arr = [];
		data.map((route) => {
			arr.push({
				from: route.startingPoint,
				to: route.endingPoint,
				departureDate: route.startingTime,
				placesSelect: route.seats,
				driverRating: route.driver.rate,
				car: new Car(route.car.id, route.car.model, route.car.color, route.car.number),
				coordStart: [route.coordStart.x, route.coordStart.y],
				coordEnd: [route.coordEnd.x, route.coordEnd.y],
				idTripDriver: route.id,
			});
		});
		return arr;
	}

	getDriversRoutes(tripData) {
    const endTime = new Date(tripData.departureDate);
    endTime.setHours(tripData.departureDate.getHours() + 1);
		return this.apiService
			.doPost(URL_REGISTRY.MAP.GET_DRIVERS_ROUTES, {
				empId: this.userService.getCurrentUser().id,
				startingTime: tripData.departureDate,
        endingTime: endTime,
				seats: tripData.placesSelect,
				coordStart: {x: tripData.coords[0][0], y: tripData.coords[0][1]},
				coordEnd: {x: tripData.coords[1][0], y: tripData.coords[1][1]},
			})
			.then((data) => this.parseDriverRoutes(data));
	}

	saveDriverRoute(tripData) {
    const endTime = new Date(tripData.departureDate);
    endTime.setHours(tripData.departureDate.getHours() + 1);
		return this.apiService.doPost(URL_REGISTRY.MAP.POST_DRIVER_ROUTE, {
			startingPoint: tripData.from,
			endingPoint: tripData.to,
			startingTime: tripData.departureDate,
			endingTime: endTime,
			idOfCar: tripData.car.id,
			empId: this.userService.getCurrentUser().id,
			coordStart: {x: tripData.coords[0][0], y: tripData.coords[0][1]},
			coordEnd: {x: tripData.coords[1][0], y: tripData.coords[1][1]},
			distance: 100,
			seats: tripData.placesSelect,
		});
	}

	savePassengerRoute(route) {
		return this.apiService.doPost(URL_REGISTRY.MAP.POST_PASSENGER_ROUTE, {
			empId: this.userService.getCurrentUser().id,
			startingPoint: route.from,
			endingPoint: route.to,
			startingTime: route.departureDate,
			endingTime: route.departureDate,
			seats: route.placesSelect,
			idTripDriver: route.idTripDriver,
			distance: 100,
			coordStart: {x: route.passengerCoordinate[0], y: route.passengerCoordinate[1]}, // координата метки пассажира
			coordEnd: {x: route.coordEnd[0], y: route.coordEnd[1]}, // координата End водителя
		});
	}

	completeDriverTrip(idTrip: number) {
		return this.apiService.doPut(URL_REGISTRY.DRIVER.TRIP.COMPLETE, {id: idTrip});
	}
}
