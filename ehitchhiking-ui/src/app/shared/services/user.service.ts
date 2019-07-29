import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from './api.service';
import {User} from '@shared/models/user';
import {Injectable} from '@angular/core';
import {catchError, map, share} from 'rxjs/operators';
import {of} from 'rxjs';
import {NotificationService} from '@shared/services/notification.service';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
	private currentUser: User | false | null;
	private currentUserPromise: Promise<User | boolean>;

	constructor(
		private apiService: ApiService,
		private notificationService: NotificationService,
		private router: Router
	) {}

	init() {
		this.currentUserPromise = this.apiService
			.doGet(URL_REGISTRY.currentUser, false)
			.pipe(
				map((response: HttpResponse<any>) => this.parseResponse(response)),
				share(),
				catchError((error: HttpErrorResponse) => {
					this.currentUser = false;
					return of(false);
				})
			)
			.toPromise();
	}

	private parseResponse(response: any) {
		const userData = response.body;
		if (userData) {
			return (this.currentUser = new User(
				userData.id,
				userData.username,
				'',
				userData.email,
				userData.phoneNumber
			));
		}
		this.currentUser = null;
		return true;
	}

	getStatus(): Promise<User | boolean> {
		if (!this.currentUserPromise) {
			this.init();
		}
		return this.currentUserPromise;
	}

	/**
	 * Unsafe
	 */
	getCurrentUser(): User | boolean {
		return this.currentUser;
	}

	refreshCurrentUser(): void {
		this.currentUserPromise = Promise.resolve(true);
		this.currentUser = null;
	}

	/**
	 * Only for authorization service
	 */
	setCurrentUser(userData: any): void {
		this.currentUser = new User(userData.id, userData.username, '', userData.email, userData.phoneNumber);
	}

	private parseAuthResponse(response: any) {
		if (response) {
			return (this.currentUser = new User(
				response.id,
				response.username,
				'',
				response.email,
				response.phoneNumber
			));
		}
		return false;
	}

	doAuthorization(login: string, password: string): void {
		this.currentUserPromise = this.apiService
			.auth(login, password)
			.pipe(
				map((response: HttpResponse<any>) => this.parseAuthResponse(response)),
				share(),
				catchError((error: HttpErrorResponse) => {
					this.currentUser = false;
					return of(false);
				})
			)
			.toPromise();

		this.currentUserPromise.then((data) => {
			if (!!data) {
				this.router.navigateByUrl('/main');
			} else {
				this.notificationService.showErrorNotification('Invalid login or password!');
			}
		});
	}

	logOut() {
		this.apiService.doGet(URL_REGISTRY.logOut).subscribe((data) => console.log(data));
		this.refreshCurrentUser();
		this.router.navigateByUrl('/login');
	}
}
