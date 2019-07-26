import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {NotificationService} from './notification.service';
import {ApiService} from '@shared/services/api.service';
import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {of} from "rxjs";

@Injectable()
export class AuthorizationService {
	constructor(private notificationService: NotificationService, private apiService: ApiService) {}

	doAuthorization(login: string, password: string): void {
		this.apiService
			.doPost(URL_REGISTRY.authorization, false, this.getAuthorizationObject(login, password))
			.pipe(
				map((response: HttpResponse<any>) => console.log(response)),
				catchError((error: HttpErrorResponse) => {
					this.notificationService.showErrorNotification('Authorization error!');
					return of(false);
				})
			)
			.subscribe(
				(data) => {
					console.log(data);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	private parseResponse(response: any) {}

	private getAuthorizationObject(customLogin: string, customPassword: string) {
		return {
			login: customLogin,
			password: customPassword,
		};
	}
}
