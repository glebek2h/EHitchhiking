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
}
