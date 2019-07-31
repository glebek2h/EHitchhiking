import { Injectable } from '@angular/core';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {map} from "rxjs/operators";
import {Car} from "@shared/models/car";
import {ApiService} from "@shared/services/api.services/api.service";

@Injectable({
  providedIn: 'root'
})
export class MainScreenService {

  constructor(private apiService: ApiService) { }

  parseDriverRoutes(data) {
    const arr = [];
    data.body.data.map((route) => {
      arr.push({from: route.startingPoint,to: route.endingPoint,departureDate: route.startingTime,
      placesSelect: route.seats,driverRating: route.driver.rate,
      car: new Car(route.car.model, route.car.color, route.car.number, 1)})
    });
    return arr;
  }

  getDriversRoutes(tripData) {
    return this.apiService.doPost(URL_REGISTRY.MAP.GET_DRIVERS_ROUTES,{
      startingTime: tripData.departureDate,
      endingTime: tripData.departureDate,
      seats: tripData.placesSelect,
      coordStart: {x: 53.2132113212,y: 32.32113},
      coordEnd: {x: 51.2132113212,y: 32.32113},
    }).pipe(map((data) => this.parseDriverRoutes(data)));
  }

  saveDriverRoute(tripData) {
   return this.apiService
      .doPost(URL_REGISTRY.MAP.POST_DRIVER_ROUTE, {
        startingPoint: tripData.from,
        endingPoint: tripData.to,
        startingTime: tripData.departureDate,
        endingTime: tripData.departureDate,
        idOfCar: 20,
        DriverId: 21,
        id: 10,
        coordStart: {x: 53.2132113212,y: 32.32113},
        coordEnd: {x: 51.2132113212,y: 32.32113},
        distance: 10.2,
        seats: tripData.placesSelect,
      }).subscribe((data) => console.log(data));
  }

  savePassengerRoute(route) {
    return this.apiService
      .doPost(URL_REGISTRY.MAP.POST_PASSENGER_ROUTE, {
        passId: 14,
        startingPoint: route.from,
        endingPoint: route.to,
        startingTime: route.departureDate,
        endingTime: route.departureDate,
        seats: route.placesSelect,
        idTripDriver: 5,
        distance: 12,
        coordStart: {x: 53.2132113212,y: 32.32113},
        coordEnd: {x: 51.2132113212,y: 32.32113},
      }).subscribe((data) => console.log(data));
  }
}
