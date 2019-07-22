import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trip} from '../trips-modal/trips';

@Component({
	selector: 'app-trip',
	templateUrl: './trip.component.html',
	styleUrls: ['./trip.component.sass'],
})
export class TripComponent implements OnInit {
	@Input() trip: Trip;

	@Output() onChange: EventEmitter<Trip> = new EventEmitter();

	constructor() {
		this.onChange = new EventEmitter();
	}

	ngOnInit() {}

	makeFavorite() {
		this.trip.isFavorite = !this.trip.isFavorite;
	}
}
