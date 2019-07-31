import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

@Injectable()
export class ProfileModalApiService {
	constructor(private apiService: ApiService) {}

	sendCarsListRequest(userId: string): Promise<any> {
		return this.apiService.doGet(URL_REGISTRY.CAR.GET_ALL, false, {id: userId});
	}

	sendNewCarRequest(car: any): Promise<any> {
		return this.apiService.doPost(URL_REGISTRY.CAR.ADD_CAR, car);
	}

	sendDeleteRequest(carId: string): Promise<any> {
		return this.apiService.doDelete(URL_REGISTRY.CAR.DELETE_CAR, {id: carId});
	}
}
