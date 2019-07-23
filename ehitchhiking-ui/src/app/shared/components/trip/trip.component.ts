import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trip} from '../trips-modal/trips';
import { StarClickMeta } from "../rating/starClickMeta";
import { Passenger } from "../rate-passengers-modal/passenger";

@Component({
	selector: 'app-trip',
	templateUrl: './trip.component.html',
	styleUrls: ['./trip.component.sass'],
})
export class TripComponent implements OnInit {
	@Input() trip: Trip;
	isRating: boolean;

	constructor() {}

	ngOnInit() {}

	makeFavorite() {
		this.trip.isFavorite = !this.trip.isFavorite;
	}

	rating(){
	  this.isRating = !this.isRating;
  }

  rateTrip(clickObj: StarClickMeta): void {
    if (!!this.trip) {
      this.trip.rating = clickObj.rating;
      this.rating();
    }
  }
}
