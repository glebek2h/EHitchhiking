import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trip} from '../trips-modal/trips';
import { StarClickMeta } from "../rating/starClickMeta";
import { Passenger } from "../rate-passengers-modal/passenger";
import {MatDialog} from '@angular/material';
import {RatePassengersModalComponent} from "@shared/components/rate-passengers-modal/rate-passengers-modal.component";
import {DEFAULT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_SM} from "@shared/constants/modal-constants";
@Component({
	selector: 'app-trip',
	templateUrl: './trip.component.html',
	styleUrls: ['./trip.component.sass'],
})
export class TripComponent implements OnInit {
	@Input() trip: Trip;
  isRatingEditorVisible: boolean;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

	makeFavorite() {
		this.trip.isFavorite = !this.trip.isFavorite;
	}

  toggleRating(){
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
    });
  }
}
