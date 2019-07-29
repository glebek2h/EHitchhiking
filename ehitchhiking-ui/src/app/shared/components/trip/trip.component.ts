import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trip} from '../trips-modal/trips';
import {StarClickMeta} from '../rating/starClickMeta';
import {UserState} from '../../enums/UserState';
import {Passenger} from '../rate-passengers-modal/passenger';

@Component({
	selector: 'app-trip',
	templateUrl: './trip.component.html',
	styleUrls: ['./trip.component.sass'],
})
export class TripComponent implements OnInit {
	@Input() trip: Trip;
	isRatingEditorVisible: boolean;
	userState = UserState;

	constructor() {}

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
}
