import {ApiService} from './api.services/api.service';
import {User} from '@shared/models/user';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
	private currentUser: User | null;
	private currentUserPromise: Promise<User | null>;

	constructor(private apiService: ApiService) {}

	init(): void {
		this.currentUserPromise = this.apiService
			.doInitGet()
			.then(this.parseResponse.bind(this), () => {
				this.currentUser = null;
				return Promise.reject();
			})
			.catch(() => {
				return null;
			});
	}

	private parseResponse(user: any): User | null {
		if (user) {
			return (this.currentUser = new User(
				user.id,
				user.firstName,
				user.lastName,
				'',
				user.email,
				user.phoneNumber
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
