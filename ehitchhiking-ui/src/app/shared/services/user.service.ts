import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from './api.service';
import {User} from '@shared/models/user';
import {Injectable} from '@angular/core';
import {catchError, map, publish, share, take, takeUntil} from 'rxjs/operators';
import {of} from 'rxjs';
import {NotificationService} from "@shared/services/notification.service";

@Injectable()
export class UserService {
	private currentUser: User | false | null;
	private currentUserPromise: Promise<User | boolean>;

	constructor(private apiService: ApiService, private notificationService: NotificationService) {}

	init() {
		this.currentUserPromise = this.apiService.doGet(URL_REGISTRY.currentUser, false).pipe(
            map((response: HttpResponse<any>) => this.parseResponse(response)),
			share(),
			catchError((error: HttpErrorResponse) => {
				this.currentUser = false;
				return of(false);
			})
		).toPromise();
	}

	private parseResponse(response: any) {
		console.log(response);
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
	setCurrentUser(response: HttpResponse<any>): boolean {
		return true;
	}

	doAuthorization(login: string, password: string): void {
		this.currentUserPromise = this.apiService
			.auth(login, password).pipe(
				map((response: HttpResponse<any>) => this.parseResponse(response)),
				share(),
				catchError((error: HttpErrorResponse) => {
					this.currentUser = false;
					return of(false);
				})
			).toPromise();
	}
}
