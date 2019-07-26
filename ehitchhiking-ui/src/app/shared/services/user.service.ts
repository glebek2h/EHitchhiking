import {HttpResponse, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from './api.service';
import {User} from '@shared/models/user';
import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class UserService {
	private currentUser: User | false | null;
	private currentUserObs: Observable<User | boolean>;

	constructor(private apiService: ApiService) {}

	init() {
		this.currentUserObs = this.apiService.doGet(URL_REGISTRY.initialization, false).pipe(
			map((response: HttpResponse<any>) => this.parseResponse(response)),
			catchError((error: HttpErrorResponse) => {
				return of(false);
			})
		);
	}

	private parseResponse(response: any) {
		const userData = response.body.data;
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

	getStatus(): Observable<User | boolean> {
		if (!this.currentUserObs) {
			this.init();
		}
		return this.currentUserObs;
	}

	/**
	 * Unsafe
	 */
	getCurrentUser(): User | boolean {
		return this.currentUser;
	}

	refreshCurrentUser(): void {
		this.currentUserObs = of(true);
		this.currentUser = null;
	}
}
