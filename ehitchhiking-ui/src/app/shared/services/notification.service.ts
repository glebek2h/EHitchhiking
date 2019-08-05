import {Injectable} from '@angular/core';
import {NotificationTypes} from '@shared/enums/notification-types.enum';
import {
	DEFAULT_MAT_SNACK_CLASS,
	NOTIFICATION_BACKGROUND_SUCCESS,
	NOTIFICATION_BACKGROUND_INFO,
	NOTIFICATION_BACKGROUND_ERROR,
	NOTIFICATION_TEXT_COLOR,
} from '@shared/constants/modal-constants';
import {IziToastSettings} from 'izitoast';
import iziToast from 'izitoast';

@Injectable()
export class NotificationService {
	static readonly notificationDuration = 5000; // in milliseconds
	static readonly notificationClassMap = {
		[NotificationTypes.Success]: 'success',
		[NotificationTypes.Info]: 'info',
		[NotificationTypes.Error]: 'error',
	};
	static readonly notificationBackgroundMap = {
		[NotificationTypes.Success]: NOTIFICATION_BACKGROUND_SUCCESS,
		[NotificationTypes.Info]: NOTIFICATION_BACKGROUND_INFO,
		[NotificationTypes.Error]: NOTIFICATION_BACKGROUND_ERROR,
	};

	constructor() {}

	showErrorNotification(notificationMessage: string) {
		iziToast.error(this.generateNotificationConfig(notificationMessage, NotificationTypes.Error));
	}

	showSuccessNotification(notificationMessage: string) {
		iziToast.success(this.generateNotificationConfig(notificationMessage, NotificationTypes.Success));
	}

	showInfoNotification(notificationMessage: string) {
		iziToast.info(this.generateNotificationConfig(notificationMessage, NotificationTypes.Info));
	}

	private returnClass(type: NotificationTypes): string {
		return NotificationService.notificationClassMap[type];
	}

	private returnBackgroundColor(type: NotificationTypes): string {
		return NotificationService.notificationBackgroundMap[type];
	}

	private generateNotificationConfig(
		notificationMessage: string,
		notificationType: NotificationTypes
	): IziToastSettings {
		return {
			class: `${this.returnClass(notificationType)} ${DEFAULT_MAT_SNACK_CLASS}`,
			title: notificationType,
			message: notificationMessage,
			position: 'topRight',
			closeOnClick: true,
			timeout: NotificationService.notificationDuration,
			backgroundColor: this.returnBackgroundColor(notificationType),
			messageColor: NOTIFICATION_TEXT_COLOR,
			titleColor: NOTIFICATION_TEXT_COLOR,
		};
	}
}
