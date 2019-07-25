import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from './api.service';
import {User} from '@shared/models/user';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {NotificationService} from './notification.service';

@Injectable()
export class UserService {
	private currentUser: User | null;

	constructor(private apiService: ApiService, private notificationService: NotificationService) {
		this.initUser();
	}

	private initUser(): void {
		this.apiService
			.doGet(URL_REGISTRY.authorization, false)
			.pipe(
				catchError((error) => {
					this.notificationService.showErrorNotification('Initialization error!');
					return error;
				})
			)
			.subscribe(
				(data) => {
					console.log(data);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	getCurrentUser(): User | null {
		return this.currentUser;
	}

	refreshCurrentUser(): void {
		this.currentUser = null;
	}
}
