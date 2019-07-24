import {URL_REGISTRY} from './../constants/urlRegistry';
import {NotificationService} from './notification.service';
import {ApiService} from '@shared/services/api.service';
import {Injectable} from '@angular/core';
import {toBase64String} from '@angular/compiler/src/output/source_map';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthorizationService {
	constructor(private apiService: ApiService, private notificationService: NotificationService) {}

	static authorizationStatus = false;

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
				() => {
					AuthorizationService.authorizationStatus = true;
				},
				() => {
					AuthorizationService.authorizationStatus = false;
				}
			);
	}

	private getAuthorizationObject(customLogin: string, customPassword: string) {
		return {
			login: customLogin,
			password: toBase64String(customPassword),
		};
	}
}
