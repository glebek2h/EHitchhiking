import {Component, Input, OnInit} from '@angular/core';
import {ActiveTrip} from './active-trip';
import {UserState} from '@shared/enums/UserState';
import {DEFAULT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_MD, MAT_DIALOG_WIDTH_SM} from '@shared/constants/modal-constants';
import {MatDialog} from '@angular/material';
import {ConfirmationModalComponent} from '@shared/modals/confirmation-modal/confirmation-modal.component';
import {ActiveTripsModalService} from '@shared/components/active-trips-modal/active-trips-modal.service';

@Component({
	selector: 'app-active-trip',
	templateUrl: './active-trip.component.html',
	styleUrls: ['./active-trip.component.sass'],
})
export class ActiveTripComponent implements OnInit {
	constructor(public dialog: MatDialog, public tripService: ActiveTripsModalService) {}
	userState = UserState;

	ngOnInit() {}

	@Input() trip: ActiveTrip;
	static readonly REMOVAL_CONFIRMATION_MESSAGE: string = 'Do you really want to remove this trip from the active?';

	openConfirmationDialogRemoveActiveTrip(event: MouseEvent) {
		let dialogRef = this.dialog.open(ConfirmationModalComponent, {
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			width: MAT_DIALOG_WIDTH_SM,
			data: {
				question: ActiveTripComponent.REMOVAL_CONFIRMATION_MESSAGE,
				confirmButtonText: 'yes',
				trips: this.tripService.trips,
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Dialog closed: ${result}`);
			if (result) {
				let start = this.tripService.trips.findIndex((trip) => trip.id === this.trip.id);
				this.tripService.trips.splice(start, 1);
			}
		});
		event.stopPropagation();
	}
}
