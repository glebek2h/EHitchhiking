import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserState } from "@shared/enums/UserState";
import { DEFAULT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_SM } from "@shared/constants/modal-constants";
import { MatDialog } from "@angular/material";
import { ConfirmationModalComponent } from "@shared/modals/confirmation-modal/confirmation-modal.component";
import { ActiveTrip } from "@shared/models/active-trip";
import { ActiveTripsApiService } from "@shared/services/api.services/active-trips.api.service";

@Component({
	selector: 'app-active-trip',
	templateUrl: './active-trip.component.html',
	styleUrls: ['./active-trip.component.sass'],
})
export class ActiveTripComponent implements OnInit {
	constructor(public dialog: MatDialog, public apiService: ActiveTripsApiService) {}
	userState = UserState;

	ngOnInit() {}

	@Input() trip: ActiveTrip;
	@Output() onDelete: EventEmitter<boolean> = new EventEmitter();
	static readonly REMOVAL_CONFIRMATION_MESSAGE: string = 'Do you really want to decline this trip?';


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
			if (result) {
			  this.apiService.removeTripPassenger(this.trip.id).then((response) => {
          if (!response || this.trip.role!=UserState.Passenger) {
            this.onDelete.emit(false);
            return;
          }
          this.onDelete.emit(true);
        });
			  this.apiService.removeTripDriver(this.trip.id).then((response)=>{
          if (!response || this.trip.role!=UserState.Driver) {
            this.onDelete.emit(false);
            return;
          }
          this.onDelete.emit(true);
        })
			}
		});
		event.stopPropagation();
	}
}
