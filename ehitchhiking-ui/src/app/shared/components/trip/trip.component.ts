
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {StarClickMeta} from '../rating/starClickMeta';
import {MatDialog} from '@angular/material';
import {RatePassengersModalComponent} from '@shared/components/rate-passengers-modal/rate-passengers-modal.component';
import {
  DEFAULT_MAT_DIALOG_CLASS, MAT_DIALOG_HEIGHT_SM,
  MAT_DIALOG_WIDTH_SMD
} from '@shared/constants/modal-constants';
import {UserState} from '@shared/enums/UserState';
import {TripHistory} from '@shared/interfaces/trip-history-interface';
import {TripsModalService} from "@shared/services/trips-modal.service";
@Component({
	selector: 'app-trip',
	templateUrl: './trip.component.html',
	styleUrls: ['./trip.component.sass'],
})
export class TripComponent implements OnInit {
	@Input() trip: TripHistory;
	@Output() onLoadingToggle = new EventEmitter<boolean>();
	isRatingEditorVisible: boolean;
	userState = UserState;

	constructor(public dialog: MatDialog, public tripsModalService: TripsModalService) {}

	ngOnInit() {}

	makeFavorite() {
		this.onLoadingToggle.emit(true);
		this.tripsModalService
			.updateSavedState(this.trip.id, this.trip.role, this.trip.saved)
			.then((response) => {
				this.trip.saved = response;
			})
			.finally(() => {
				this.onLoadingToggle.emit(false);
			});
	}

	toggleRating() {
		this.isRatingEditorVisible = !this.isRatingEditorVisible;
	}

	rateTrip(clickObj: StarClickMeta): void {
		if (!this.trip) {
			return;
		}
		this.trip.rating = clickObj.rating;
		this.toggleRating();
	}

	openRatePassengersDialog() {
		this.dialog.open(RatePassengersModalComponent, {
			width: MAT_DIALOG_WIDTH_SMD,
      //height: MAT_DIALOG_HEIGHT_SM,
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			data: {
				dataKey: this.trip.role,
        tripId: this.trip.id
			},
		});
	}
}
