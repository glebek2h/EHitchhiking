import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { EventEmitter, Output} from '@angular/core';
import {ActiveTrip} from './active-trip';
import {UserState} from '@shared/enums/UserState';
import {DEFAULT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_SM} from '@shared/constants/modal-constants';
import {MatDialog} from '@angular/material';
import {ConfirmationModalComponent} from '@shared/modals/confirmation-modal/confirmation-modal.component';
import {ActiveTrip} from '@shared/models/active-trip';
import {ActiveTripsApiService} from '@shared/services/api.services/active-trips.api.service';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';

@Component({
	selector: 'app-active-trip',
	templateUrl: './active-trip.component.html',
	styleUrls: ['./active-trip.component.sass'],
})
export class ActiveTripComponent implements OnInit {
	constructor(public dialog: MatDialog, private activeTripsApiService: ActiveTripsApiService) {}
	userState = UserState;

	@Input() trip: ActiveTrip;

	ngOnInit(): void {}

	@Output() onDelete: EventEmitter<{id: number, role: UserState}> = new EventEmitter();
	static readonly REMOVAL_CONFIRMATION_MESSAGE: string = 'Do you really want to decline this trip?';

	removeTrip(){
	  this.onDelete.emit({id: this.trip.id, role: this.trip.role});
  }

	openConfirmationDialogRemoveActiveTrip(event: MouseEvent) {
		const dialogRef = this.dialog.open(ConfirmationModalComponent, {
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			width: MAT_DIALOG_WIDTH_SM,
			data: {
				question: ActiveTripComponent.REMOVAL_CONFIRMATION_MESSAGE,
				confirmButtonText: 'yes',
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result){
			  this.removeTrip();
      }
		});
		event.stopPropagation();
	}
}
