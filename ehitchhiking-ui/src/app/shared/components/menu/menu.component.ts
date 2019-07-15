import {Component, OnInit} from '@angular/core';
import {BUTTONS_NAMES} from './buttons-names';
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {MatDialog} from '@angular/material';
import {RatePassengersModalComponent} from '../rate-passengers-modal/rate-passengers-modal.component';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
	events: string[] = [];
	opened: boolean;
	buttonsArray = [];
	message: boolean;
	constructor(public dialog: MatDialog) {}

	ngOnInit() {
		this.buttonsArray = BUTTONS_NAMES;
	}
	openBlacklistDialog(): void {
		this.message = !this.message;
		const dialogRef = this.dialog.open(BlacklistComponent, {
			width: '400px',
			data: {
				message: this.message,
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
			this.message = true;
		});
	}

	openRatePassengersDialog(): void {
		const dialogRef = this.dialog.open(RatePassengersModalComponent, {
			width: '400px',
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
}
