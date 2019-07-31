import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from './api.services/api.service';
import {User} from '@shared/models/user';
import {Injectable} from '@angular/core';
import {catchError, map, share} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class UserService {
	private currentUser: User | null;
	private currentUserPromise: Promise<User | null>;

	constructor(private apiService: ApiService) {}

	init(): void {
		this.currentUserPromise = this.apiService
			.doGet(URL_REGISTRY.CURRENT_USER, false)
			.pipe(
				map((response: HttpResponse<any>) => this.parseResponse(response)),
				share(),
				catchError((error: HttpErrorResponse) => {
					this.currentUser = null;
					return of(null);
				})
			)
			.toPromise();
	}

	private parseResponse(response: HttpResponse<any>): User | null {
		const userData = response.body;
		if (userData) {
			return (this.currentUser = new User(
				userData.id,
				userData.username,0,
				'',
				userData.email,
				userData.phoneNumber
			));
		}
		this.currentUser = null;
		return null;
	}

	getStatus(): Promise<User | null> {
		if (!this.currentUserPromise) {
			this.init();
		}
		return this.currentUserPromise;
	}

	/**
	 * Unsafe
	 */
	getCurrentUser(): User | null {
		return this.currentUser;
	}

	refreshCurrentUser(): void {
		this.currentUserPromise = Promise.resolve(null);
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
