import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ActiveTrip} from '../active-trip/active-trip';
import {UserState} from '@shared/enums/UserState';

@Component({
	selector: 'app-active-trip-additional-info',
	templateUrl: './active-trip-additional-info.component.html',
	styleUrls: ['./active-trip-additional-info.component.sass'],
})
export class ActiveTripAdditionalInfoComponent implements OnInit {
	@Input() trip: ActiveTrip;
	userState = UserState;

	constructor() {}

	ngOnInit() {}
}
