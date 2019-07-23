import {Component, OnInit} from '@angular/core';
import {BUTTONS_NAMES} from './buttons-names';
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {MatDialog} from '@angular/material';
import {RatePassengersModalComponent} from '@shared/components/rate-passengers-modal/rate-passengers-modal.component';
import {ProfileModalComponent} from '@shared/modals/profile-modal/profile-modal.component';
import {Router} from '@angular/router';
import {DEFUALT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_MD, MAT_DIALOG_WIDTH_SM} from '../../constants/modal-constants';
import {TripsModalComponent} from '../trips-modal/trips-modal.component';
import {ChatComponent} from '@shared/components/chat-data/chat/chat.component';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
	opened: boolean;
	buttonsArray = [];

	constructor(private router: Router, public dialog: MatDialog) {}

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

	openHistoryDialog() {
		const dialogRef = this.dialog.open(TripsModalComponent, {
			panelClass: DEFUALT_MAT_DIALOG_CLASS,
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

	openChatDialog(): void {
		const dialogRef = this.dialog.open(ChatComponent, {
			width: MAT_DIALOG_WIDTH_SM,
			panelClass: DEFUALT_MAT_DIALOG_CLASS,
			autoFocus: false,
			disableClose: true,
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
}
