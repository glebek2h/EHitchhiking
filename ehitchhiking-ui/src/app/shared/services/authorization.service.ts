import {AuthorizationApiService} from './api.services/authorization.api.service';
import {UserService} from './user.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {NotificationService} from './notification.service';
import {ApiService} from '@shared/services/api.services/api.service';
import {Injectable} from '@angular/core';
import {catchError, share, map} from 'rxjs/operators';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '@shared/models/user';

@Injectable()
export class AuthorizationService {
	constructor(
		private notificationService: NotificationService,
		private authorizationApiService: AuthorizationApiService,
		private userService: UserService,
		private router: Router
	) {}

	doAuthorization(login: string, password: string): void {
		const authPromise = this.authorizationApiService.sendAuthRequest(login, password);
		let currentUser = null;
		authPromise.then((data) => {
			if (!!data) {
				currentUser = data;
				this.router.navigateByUrl('/main');
			} else if (data === false) {
				currentUser = false;
				this.notificationService.showErrorNotification('Server error!');
			} else {
				this.notificationService.showErrorNotification('Invalid login or password!');
			}
		});
		this.userService.setCurrentUser(currentUser, authPromise);
	}

	logOut() {
		this.authorizationApiService.sendLogOutRequest();
		this.userService.refreshCurrentUser();
		this.router.navigateByUrl('/login');
	}
}
