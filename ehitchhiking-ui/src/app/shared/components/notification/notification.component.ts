import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {NotificationTypes} from '@shared/enums/notification-types.enum';
import {MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.sass'],
	providers: [MatSnackBarConfig],
	encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent {
	type: NotificationTypes;
	message: string;
	notificationRef: MatSnackBar;

	constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
		this.type = data.type;
		this.message = data.message;
		this.notificationRef = data.notificationRef;
	}

	closeNotification() {
		this.notificationRef.dismiss();
	}
}
