import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserState } from "@shared/enums/UserState";
import { DEFAULT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_SM } from "@shared/constants/modal-constants";
import { MatDialog } from "@angular/material";
import { ConfirmationModalComponent } from "@shared/modals/confirmation-modal/confirmation-modal.component";
import { ActiveTripsModalService } from "@shared/components/active-trips-modal/active-trips-modal.service";
import { ActiveTrip } from "@shared/models/active-trip";
import { ActiveTripsApiService } from "@shared/services/api.services/active-trips.api.service";

@Component({
	selector: 'app-active-trip',
	templateUrl: './active-trip.component.html',
	styleUrls: ['./active-trip.component.sass'],
})
export class ActiveTripComponent implements OnInit {
	constructor(public dialog: MatDialog, public tripService: ActiveTripsModalService, public apiService: ActiveTripsApiService) {}
	userState = UserState;

	ngOnInit() {}

	@Input() trip: ActiveTrip;
	@Output() onDelete: EventEmitter<boolean> = new EventEmitter();
	static readonly REMOVAL_CONFIRMATION_MESSAGE: string = 'Do you really want to decline this trip?';

	getActiveTrips(){
    this.apiService.getActiveTrips().then(
      (data) => {
        return data;
      }
    );
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
			if (result) {
			  this.apiService.removeTripForPassenger(this.trip.id).then((response) => {
			    console.log(response);
          if (!response || this.trip.role!=UserState.Passenger) {
            this.onDelete.emit(false);
            return;
          }
          this.onDelete.emit(true);

          //  const start = this.tripService.trips.findIndex((trip) => trip.id === this.trip.id);
          // this.tripService.trips.splice(start, 1);
        })
        // const start = this.tripService.trips.findIndex((trip) => trip.id === this.trip.id);
				// this.tripService.trips.splice(start, 1);
			}
		});
		event.stopPropagation();
	}
}
