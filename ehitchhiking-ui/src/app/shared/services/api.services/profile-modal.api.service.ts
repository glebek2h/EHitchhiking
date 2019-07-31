import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

@Injectable()
export class ProfileModalApiService {
	constructor(private apiService: ApiService) {}

	sendCarsListRequest(userId: string): Promise<any> {
		return this.apiService.doGet(URL_REGISTRY.CAR.GET_ALL, false, {id: userId});
	}
}
