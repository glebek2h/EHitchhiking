import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {NotificationTypes} from '@shared/enums/notification.types';
import {MatSnackBarConfig, MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.sass'],
	providers: [MatSnackBarConfig],
	encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent {
	static readonly headerClassMap = {
		[NotificationTypes.success]: 'success',
		[NotificationTypes.info]: 'info',
		[NotificationTypes.error]: 'error',
	};
	type: NotificationTypes;
	message: string;

	constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
		this.type = data.type;
		this.message = data.message;
	}
}
