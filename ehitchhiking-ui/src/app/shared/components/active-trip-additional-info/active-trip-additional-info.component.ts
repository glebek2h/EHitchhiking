import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActiveTrip} from '../active-trip/active-trip';
import {UserState} from '@shared/enums/UserState';
import {ActiveTripsMapService} from "@shared/services/active-trips-map.service";
import {Route} from "@pages/main-screen/Route";
import {Car} from "@shared/models/car";

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

  showTrip(){
	 this.closeDialog.emit(true);
	 this.activeTripsMapService.blockMainScreen(true);
	 console.log(this.trip.passenger);

	  this.activeTripsMapService.sendMessage({
      from: this.trip.startPoint,
      to: this.trip.endPoint,
      departureDate: this.trip.date,
      placesSelect: this.trip.reservedSeats,
      passengers: this.trip.passenger,
      driverRating: this.trip.rating,
      car: this.trip.driver.car.model,
    });
  }

}
