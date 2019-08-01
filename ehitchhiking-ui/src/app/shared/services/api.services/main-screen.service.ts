import { Injectable } from '@angular/core';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {map} from "rxjs/operators";
import {Car} from "@shared/models/car";
import {ApiService} from "@shared/services/api.services/api.service";
import {UserService} from "@shared/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class MainScreenService {

  constructor(private apiService: ApiService,private userService: UserService) { }

  parseDriverRoutes(data) {
    const arr = [];
    console.log(data);
    data.map((route) => {
      arr.push({
        from: route.startingPoint,
        to: route.endingPoint,
        departureDate: route.startingTime,
        placesSelect: route.seats,
        driverRating: route.driver.rate,
        car: new Car(route.car.model, route.car.color, route.car.number, '1'),
        coordStart: [route.coordStart.x, route.coordStart.y],
        coordEnd: [route.coordEnd.x, route.coordEnd.y],
        idTripDriver: route.id
      })
    });
    return arr;
  }

  getDriversRoutes(tripData) {
    return this.apiService.doPost(URL_REGISTRY.MAP.GET_DRIVERS_ROUTES,{
      empId: this.userService.getCurrentUser().id,
      startingTime: tripData.departureDate,
      endingTime: tripData.departureDate,
      seats: tripData.placesSelect,
      coordStart: {x: tripData.coords[0][0],y: tripData.coords[0][1]},
      coordEnd: {x: tripData.coords[1][0],y: tripData.coords[1][1]},
    }).then((data) => this.parseDriverRoutes(data));
  }

  saveDriverRoute(tripData) {
   return this.apiService
      .doPost(URL_REGISTRY.MAP.POST_DRIVER_ROUTE, {
        startingPoint: tripData.from,
        endingPoint: tripData.to,
        startingTime: tripData.departureDate,
        endingTime: tripData.departureDate,
        idOfCar: 20, // TODO RELEASE
        empId: this.userService.getCurrentUser().id,
        coordStart: {x: tripData.coords[0][0],y: tripData.coords[0][1]},
        coordEnd: {x: tripData.coords[1][0],y: tripData.coords[1][1]},
        distance: tripData.distance,
        seats: tripData.placesSelect,
      }).then((data) => console.log(data));
  }

  savePassengerRoute(route) {
    return this.apiService
      .doPost(URL_REGISTRY.MAP.POST_PASSENGER_ROUTE, {
        empId: this.userService.getCurrentUser().id,
        startingPoint: route.from,
        endingPoint: route.to,
        startingTime: route.departureDate,
        endingTime: route.departureDate,
        seats: route.placesSelect,
        idTripDriver: route.id,
        distance: route.distance,
        coordStart: route.passengerCoordinate,// координата метки пассажира
        coordEnd: route.coordEnd,// координата End водителя
      }).then((data) => console.log(data));
  }
}
