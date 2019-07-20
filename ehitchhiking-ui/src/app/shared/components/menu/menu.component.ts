import {Component, OnInit} from '@angular/core';
import {BUTTONS_NAMES} from './buttons-names';
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {MatDialog} from '@angular/material';
import {RatePassengersModalComponent} from '../rate-passengers-modal/rate-passengers-modal.component';
import {ProfileModalComponent} from '../../modals/profile-modal/profile-modal.component';
import {Router} from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
	opened: boolean;
	buttonsArray = [];
	DIALOG_WINDOW_WIDTH = '23rem';
	DIALOG_PANEL_CLASS = 'mat-dialog-no-padding';

	constructor(private router: Router, public dialog: MatDialog) {}

	ngOnInit() {
		this.buttonsArray = BUTTONS_NAMES;
	}
	openBlacklistDialog(): void {
		const dialogRef = this.dialog.open(BlacklistComponent, {
			width: this.DIALOG_WINDOW_WIDTH,
			panelClass: this.DIALOG_PANEL_CLASS,
			autoFocus: false,
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	openRatePassengersDialog(): void {
		const dialogRef = this.dialog.open(RatePassengersModalComponent, {
			width: this.DIALOG_WINDOW_WIDTH,
			panelClass: this.DIALOG_PANEL_CLASS,
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
}
