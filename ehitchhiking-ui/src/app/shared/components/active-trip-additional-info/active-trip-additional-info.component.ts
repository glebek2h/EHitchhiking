import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserState} from '@shared/enums/UserState';
import {ActiveTripsMapService} from '@shared/services/active-trips-map.service';
import {ActiveTrip} from '@shared/models/active-trip';

@Component({
	selector: 'app-active-trip-additional-info',
	templateUrl: './active-trip-additional-info.component.html',
	styleUrls: ['./active-trip-additional-info.component.sass'],
})
export class ActiveTripAdditionalInfoComponent implements OnInit {
	@Input() trip: ActiveTrip;
	@Output() closeDialog = new EventEmitter<any>();
	userState = UserState;

	constructor(private activeTripsMapService: ActiveTripsMapService) {}

	ngOnInit() {}

	showTrip() {
		this.closeDialog.emit(true);
		this.activeTripsMapService.blockMainScreen(true);
		this.activeTripsMapService.sendMessage({
			from: this.trip.startPoint,
			to: this.trip.endPoint,
			departureDate: this.trip.startTime,
			placesSelect: this.trip.reservedSeats,
			passengers: this.trip.passenger,
			car: this.trip.car.model,
		});
	}
}
