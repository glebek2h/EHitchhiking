import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {User} from '@shared/models/user';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

@Injectable()
export class AuthorizationApiService {
	constructor(private apiService: ApiService) {}

	sendAuthRequest(login: string, password: string): Promise<any> {
		return this.apiService.doAuthGet(login, password).then(this.parseData);
	}

	sendLogOutRequest(): void {
		this.apiService.doGet(URL_REGISTRY.LOG_OUT);
	}

	private parseData(data: any): User | null {
		if (data) {
			return new User(data.id, data.username, '', data.email, data.phoneNumber);
		}
		return null;
	}
}
