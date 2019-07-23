import {Component, Inject} from '@angular/core';
import {NotificationTypes} from '@shared/enums/notification.types';
import {MatSnackBarConfig, MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.sass'],
	providers: [MatSnackBarConfig],
})
export class NotificationComponent {
	type: NotificationTypes;
	message: string;

	constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
		this.type = data.type;
		this.message = data.message;
	}

	getNotifTypeByInputType(enumValue) {
		const curEnum = NotificationTypes;
		const keys = Object.keys(curEnum).filter((value) => curEnum[value] === enumValue);
		return keys.length > 0 ? keys[0] : null;
	}
}
