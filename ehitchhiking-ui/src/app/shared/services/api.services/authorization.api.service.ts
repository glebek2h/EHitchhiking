import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {of} from 'rxjs';
import {map, share, catchError} from 'rxjs/operators';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
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
		this.apiService
			.doGet(URL_REGISTRY.logOut)
			.toPromise()
			.then();
	}

	private parseResponse(response: any): User | false {
		if (response) {
			return new User(response.id, response.username, '', response.email, response.phoneNumber);
		}
		return false;
	}
}
