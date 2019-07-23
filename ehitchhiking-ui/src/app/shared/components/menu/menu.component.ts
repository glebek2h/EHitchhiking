import {MAT_SNACK_HORIZONTAL_POSITION} from './../../constants/modal-constants';
import {Component, OnInit} from '@angular/core';
import {BUTTONS_NAMES} from './buttons-names';
import {MatDialog, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {RatePassengersModalComponent} from '../rate-passengers-modal/rate-passengers-modal.component';
import {ProfileModalComponent} from '@shared/modals/profile-modal/profile-modal.component';
import {Router} from '@angular/router';
import {NotificationComponent} from '../notification/notification.component';
import {NotificationTypes} from '@shared/enums/notification.types';
import {
	DEFAULT_MAT_DIALOG_CLASS,
	MAT_DIALOG_WIDTH_MD,
	MAT_DIALOG_WIDTH_SM,
	DEFAULT_MAT_SNACK_CLASS,
} from '@shared/constants/modal-constants';
import {BlacklistComponent} from '@shared/components/blacklist/blacklist.component';
import {TripsModalComponent} from '../trips-modal/trips-modal.component';
import {ChatComponent} from '@shared/components/chat-data/chat/chat.component';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
	static readonly notificationDuration = 5000; // in milliseconds
	static readonly notificationClassMap = {
		[NotificationTypes.Success]: 'success',
		[NotificationTypes.Info]: 'info',
		[NotificationTypes.Error]: 'error',
	};
	opened: boolean;
	buttonsArray = [];

	constructor(private router: Router, public dialog: MatDialog, private notificationBar: MatSnackBar) {}

	ngOnInit() {
		this.buttonsArray = BUTTONS_NAMES;
	}
	openBlacklistDialog(): void {
		const dialogRef = this.dialog.open(BlacklistComponent, {
			width: MAT_DIALOG_WIDTH_SM,
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	openRatePassengersDialog(): void {
		const dialogRef = this.dialog.open(RatePassengersModalComponent, {
			width: MAT_DIALOG_WIDTH_SM,
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	logOut() {
		this.router.navigateByUrl('/login');
	}

	openHistoryDialog() {
		const dialogRef = this.dialog.open(TripsModalComponent, {
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			width: MAT_DIALOG_WIDTH_MD,
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	openProfileDialog(): void {
		this.dialog.open(ProfileModalComponent, {panelClass: 'mat-dialog-no-padding', autoFocus: false});
	}

	private returnClass(type: NotificationTypes): string {
		return MenuComponent.notificationClassMap[type];
	}

	private generateNotificationConf(
		notificationMessage: string,
		notificationType: NotificationTypes
	): MatSnackBarConfig<any> {
		const config = new MatSnackBarConfig<any>();
		config.data = {message: notificationMessage, type: notificationType};
		config.duration = MenuComponent.notificationDuration;
		config.horizontalPosition = MAT_SNACK_HORIZONTAL_POSITION;
		config.panelClass = [this.returnClass(notificationType), DEFAULT_MAT_SNACK_CLASS];
		return config;
	}
	showErrorNotification(notificationMessage: string) {
		this.notificationBar.openFromComponent(
			NotificationComponent,
			this.generateNotificationConf(notificationMessage, NotificationTypes.Error)
		);
	}

	showSuccessNotification(notificationMessage: string) {
		this.notificationBar.openFromComponent(
			NotificationComponent,
			this.generateNotificationConf(notificationMessage, NotificationTypes.Success)
		);
	}

	showInfoNotification(notificationMessage: string) {
		this.notificationBar.openFromComponent(
			NotificationComponent,
			this.generateNotificationConf(notificationMessage, NotificationTypes.Info)
		);
	}

	openChatDialog(): void {
		const dialogRef = this.dialog.open(ChatComponent, {
			width: MAT_DIALOG_WIDTH_SM,
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			disableClose: true,
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
}
