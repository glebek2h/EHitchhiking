import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {map, share} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {User} from '@shared/models/user';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

@Injectable()
export class AuthorizationApiService {
	constructor(private apiService: ApiService) {}

	sendAuthRequest(login: string, password: string): Promise<any> {
		return this.apiService
			.doAuthGet(login, password)
			.pipe(
				map((response: HttpResponse<any>) => this.parseResponse(response)),
				share()
			)
			.toPromise();
	}

	sendLogOutRequest() {
		this.apiService.doGet(URL_REGISTRY.LOG_OUT).toPromise();
	}

	private parseResponse(response: any): User | null {
		if (response) {
			return new User(response.id, response.username, '', response.email, response.phoneNumber);
		}
		return null;
	}
}
