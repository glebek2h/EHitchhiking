import {UserService} from './user.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {NotificationService} from './notification.service';
import {ApiService} from '@shared/services/api.service';
import {Injectable} from '@angular/core';
import {catchError, share} from 'rxjs/operators';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthorizationService {
	constructor(
		private notificationService: NotificationService,
		private apiService: ApiService,
		private userService: UserService,
		private router: Router
	) {}

	doAuthorization(login: string, password: string): void {
		this.apiService
			.doPost(URL_REGISTRY.authorization, false, this.getAuthorizationObject(login, password))
			.pipe(
				share(),
				catchError((error: HttpErrorResponse) => {
					this.notificationService.showErrorNotification('Server error!');
					return of(false);
				})
			)
			.subscribe((response: HttpResponse<any>) => {
				console.log(response);
				this.parseResponse(response);
			});
	}

	private parseResponse(response: HttpResponse<any>): void {
		const userData = response.body.data;
		if (!userData) {
			this.notificationService.showErrorNotification('Invalid login or password!');
			return;
		}
		this.userService.setCurrentUser(userData);
		this.router.navigateByUrl('/main');
	}

	private getAuthorizationObject(customLogin: string, customPassword: string) {
		return {
			login: customLogin,
			password: customPassword,
		};
	}

	public logOut(): void {
		this.userService.refreshCurrentUser();
		this.apiService
			.doDelete(URL_REGISTRY.authorization)
			.pipe(
				catchError((error: HttpErrorResponse) => {
					this.notificationService.showErrorNotification('Server error');
					return of(false);
				})
			)
			.subscribe((data) => console.log(data));
		this.router.navigateByUrl('/login');
	}
}
