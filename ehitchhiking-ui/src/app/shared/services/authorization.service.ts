import {AuthorizationApiService} from './api.services/authorization.api.service';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthorizationService {
	constructor(
		private authorizationApiService: AuthorizationApiService,
		private userService: UserService,
		private router: Router
	) {}

	doAuthorization(login: string, password: string): void {
		const authPromise = this.authorizationApiService.sendAuthRequest(login, password);
		let currentUser = null;
		authPromise.then(
			(data) => {
				if (!data) {
					return;
				}
				currentUser = data;
				this.router.navigateByUrl('/main');
				this.userService.setCurrentUser(currentUser, authPromise);
			},
			() => {
				this.userService.setCurrentUser(null, Promise.resolve(null));
			}
		);
	}

	logOut(): void {
		this.authorizationApiService.sendLogOutRequest();
		this.userService.refreshCurrentUser();
		this.router.navigateByUrl('/login');
	}
}
