import {NotificationService} from './notification.service';
import {ApiService} from '@shared/services/api.service';
import {Injectable} from '@angular/core';
import {toBase64String} from '@angular/compiler/src/output/source_map';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthorizationService {
	constructor(private apiService: ApiService, private notificationService: NotificationService) {}

	doAuthorization(login: string, password: string): void {
		this.apiService
			.doPost('', false, this.getAuthorizationObject(login, password))
			.pipe(catchError(this.notificationService.showErrorNotification('Authorization error!')))
			.subscribe((response) => {});
	}

	private getAuthorizationObject(customLogin: string, customPassword: string) {
		return {
			login: customLogin,
			password: toBase64String(customPassword),
		};
	}
}
