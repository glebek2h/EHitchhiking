import {AuthorizationApiService} from './api.services/authorization.api.service';
import {UserService} from './user.service';
import {NotificationService} from './notification.service';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

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
			} else {
				this.notificationService.showErrorNotification('Invalid login or password!');
			}
			this.userService.setCurrentUser(currentUser, authPromise);
		});
	}

	logOut() {
		this.authorizationApiService.sendLogOutRequest();
		this.userService.refreshCurrentUser();
		this.router.navigateByUrl('/login');
	}
}
