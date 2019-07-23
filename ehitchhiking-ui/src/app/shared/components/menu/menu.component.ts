import {Component, OnInit} from '@angular/core';
import {BUTTONS_NAMES} from './buttons-names';
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {RatePassengersModalComponent} from '../rate-passengers-modal/rate-passengers-modal.component';
import {ProfileModalComponent} from '../../modals/profile-modal/profile-modal.component';
import {Router} from '@angular/router';
import {DEFUALT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_SM} from '../../constants/modal-constants';
import {NotificationComponent} from '../notification/notification.component';
import {NotificationTypes} from '@shared/enums/notification.types';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
	opened: boolean;
	buttonsArray = [];

	constructor(private router: Router, public dialog: MatDialog, private notificationBar: MatSnackBar) {}

	ngOnInit() {
		this.buttonsArray = BUTTONS_NAMES;
	}
	openBlacklistDialog(): void {
		const dialogRef = this.dialog.open(BlacklistComponent, {
			width: MAT_DIALOG_WIDTH_SM,
			panelClass: DEFUALT_MAT_DIALOG_CLASS,
			autoFocus: false,
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	openRatePassengersDialog(): void {
		const dialogRef = this.dialog.open(RatePassengersModalComponent, {
			width: MAT_DIALOG_WIDTH_SM,
			panelClass: DEFUALT_MAT_DIALOG_CLASS,
			autoFocus: false,
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	logOut() {
		this.router.navigateByUrl('/login');
	}

	openProfileDialog(): void {
		this.dialog.open(ProfileModalComponent, {panelClass: 'mat-dialog-no-padding', autoFocus: false});
	}

	openSnackBar() {
		this.notificationBar.openFromComponent(NotificationComponent, {
			duration: 500000,
			data: {
				message: 'Hello!',
				type: NotificationTypes.warn,
			},
		});
	}
}
