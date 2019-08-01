import {Component, Input, OnInit} from '@angular/core';
import {StarClickMeta} from '../rating/starClickMeta';
import {MatDialog} from '@angular/material';
import {RatePassengersModalComponent} from '@shared/components/rate-passengers-modal/rate-passengers-modal.component';
import {DEFAULT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_SM} from '@shared/constants/modal-constants';
import {UserState} from '@shared/enums/UserState';
import {TripHistory} from '@shared/interfaces/trip-history-interface';
@Component({
	selector: 'app-trip',
	templateUrl: './trip.component.html',
	styleUrls: ['./trip.component.sass'],
})
export class TripComponent implements OnInit {
	@Input() trip: TripHistory;
	isRatingEditorVisible: boolean;
	userState = UserState;

	constructor(public dialog: MatDialog) {}

	ngOnInit() {}

	makeFavorite() {
		this.trip.isFavorite = !this.trip.isFavorite;
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
			width: MAT_DIALOG_WIDTH_SM,
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			data: {
				dataKey: this.trip.role,
			},
		});
	}
}
