import {ApiService} from '@shared/services/api.services/api.service';
import {Injectable} from "@angular/core";
import {User} from "@shared/components/rate-passengers-modal/user";
import {URL_REGISTRY} from "@shared/constants/urlRegistry";


@Injectable()
export class RatePassengersApiService {
  constructor(private apiService: ApiService) {}

  addRatePassenger(user: User){
    this.apiService.getPut(URL_REGISTRY.RATE.ADD_RATE_PASSENGER,{idPass: user.id,rate: user.rating});
  }

  addRateDriver(user: User){
    this.apiService.getPut(URL_REGISTRY.RATE.ADD_RATE_DRIVER,{idDriver: user.id,rate: user.rating}).subscribe(
      (data) => console.log(data)
    );
    console.log('kyky from rate');
  }
}
