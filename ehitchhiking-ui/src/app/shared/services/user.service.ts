import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from './api.services/api.service';
import {User} from '@shared/models/user';
import {Injectable} from '@angular/core';
import {catchError, map, share} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class UserService {
	private currentUser: User | false | null;
	private currentUserPromise: Promise<User | boolean>;

	constructor(private apiService: ApiService) {}

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
	setCurrentUser(user: any, userPromise: Promise<any>): void {
		this.currentUser = user;
		this.currentUserPromise = userPromise;
	}
}
