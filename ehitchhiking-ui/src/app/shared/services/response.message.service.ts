import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';

@Injectable()
export class ResponseMessageService {
	constructor(private notificationService: NotificationService) {}

	showErrorMessage(message: string) {
		this.notificationService.showErrorNotification(message);
	}
	showSuccessMessage(message: string) {
		this.notificationService.showSuccessNotification(message);
	}
	showInfoMessage(message: string) {
		this.notificationService.showInfoNotification(message);
	}
}
