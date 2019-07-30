import {Component, Input, OnInit} from '@angular/core';
import {ActiveTrip} from './active-trip';
import {UserState} from '@shared/enums/UserState';

@Component({
	selector: 'app-active-trip',
	templateUrl: './active-trip.component.html',
	styleUrls: ['./active-trip.component.sass'],
})
export class ActiveTripComponent implements OnInit {
	constructor() {}
	userState = UserState;

	ngOnInit() {}

	@Input() trip: ActiveTrip;
}
