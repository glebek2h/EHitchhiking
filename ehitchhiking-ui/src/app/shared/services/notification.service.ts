import {Injectable} from '@angular/core';
import {ToastyService, ToastyConfig} from 'ng2-toasty';

@Injectable()
export class NotificationService {
	constructor(private notificationService: ToastyService, private notificationConfig: ToastyConfig) {}

	doNotification(customTitle: string = 'Notification', message: string = 'Hello!') {
		this.notificationService.default({
			title: 'Toast It!',
			msg: 'Mmmm, tasties...',
			showClose: true,
			timeout: 5000,
			theme: 'default',
		});
		this.notificationConfig.position = 'bottom-right';
	}
	doWarnNotification(title: string = 'Error!', message: string = 'We have an error!') {}
	doSuccessNotification(title: string = 'Success!', message: string = 'Your operation is successfully done!') {}
}
