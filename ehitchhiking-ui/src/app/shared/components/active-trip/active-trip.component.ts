import {Component, Input, OnInit} from '@angular/core';
import {StarClickMeta} from '../rating/starClickMeta';
import {ActiveTrip} from './active-trip';

@Component({
	selector: 'app-active-trip',
	templateUrl: './active-trip.component.html',
	styleUrls: ['./active-trip.component.sass'],
})
export class ActiveTripComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	@Input() trip: ActiveTrip;
	isRatingEditorVisible: boolean;

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

	showTripInfo() {
		this.trip.showTripInfo = !this.trip.showTripInfo;
	}
}
