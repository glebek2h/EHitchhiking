import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {NotificationService} from './notification.service';
import {ApiService} from '@shared/services/api.service';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthorizationService {
	constructor(private notificationService: NotificationService, private apiService: ApiService) {}

	doAuthorization(login: string, password: string): void {
		this.apiService
			.doPost(URL_REGISTRY.authorization, false, this.getAuthorizationObject(login, password))
			.pipe(
				catchError((error) => {
					this.notificationService.showErrorNotification('Authorization error!');
					return error;
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

	private getAuthorizationObject(customLogin: string, customPassword: string) {
		return {
			login: customLogin,
			password: btoa(customPassword),
		};
	}
}
