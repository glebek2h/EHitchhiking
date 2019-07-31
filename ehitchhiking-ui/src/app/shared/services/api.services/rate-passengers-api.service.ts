import {ApiService} from '@shared/services/api.services/api.service';
import {Injectable} from "@angular/core";
import {Pass,Driver} from "@shared/components/rate-passengers-modal/user";
import {URL_REGISTRY} from "@shared/constants/urlRegistry";
import {User} from "@shared/models/user";
import {Car} from "@shared/models/car";
import {map} from "rxjs/operators";


@Injectable()
export class RatePassengersApiService {
  constructor(private apiService: ApiService) {}

  addRatePassenger(users: Pass[]){
    this.apiService.getPut(URL_REGISTRY.RATE.ADD_RATE_PASSENGER,{requestListPass: users}).subscribe(data=>console.log(data));
  }

  addRateDriver(users: Driver[]){
    this.apiService.getPut(URL_REGISTRY.RATE.ADD_RATE_DRIVER,{requestListDriver: users}).subscribe(data=>console.log(data));
  }

  mapTripPassengers(data: any): User[] {
    return data.map((obj) => {
      return new User(obj.id, obj.firstName + ' ' + obj.lastName,0 ,'', obj.email, '', [
        new Car('ferrari', 'pink', 'A3434B', 1),
      ],);
    });
  }

  mapTripDrivers(data: any): User[] {
    if(!Array.isArray(data)){
      return [new User(data.id, data.firstName + ' ' + data.lastName, 0,'', data.email, '', [
        new Car('ferrari', 'pink', 'A3434B', 1),
      ])];
    }
    else{
      return data.map((obj) => {
        return new User(obj.id, obj.firstName + ' ' + obj.lastName, 0,'', obj.email, '', [
          new Car('ferrari', 'pink', 'A3434B', 1),
        ]);
      });
    }

  }


  getTripPassengers(id: number){
    return this.apiService.doGet(URL_REGISTRY.RATE.GET_RATE_PASSENGERS, false,{tripId: id})
      .pipe(map((data) => this.mapTripPassengers(data.body.data)));
  }

  getTripDriver(id: number){
    return this.apiService.doGet(URL_REGISTRY.RATE.GET_RATE_DRIVER, false,{tripId: id})
      .pipe(map((data) => this.mapTripDrivers(data.body.data)));
  }
}
