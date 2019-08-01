import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "@shared/models/user";
import {UserState} from "@shared/enums/UserState";
import {MapTripFormService} from "@shared/services/map-trip-form.service";

@Component({
	selector: 'app-trip-registration',
	templateUrl: './trip-registration.component.html',
	styleUrls: ['./trip-registration.component.sass'],
})
export class TripRegistrationComponent implements OnInit {
	@Input() isShown: boolean;
  @Input() user: User;
  @Input() userState: UserState;
	@Output() formData = new EventEmitter<any>(); // TODO
  @Output() passengerFormData = new EventEmitter<any>(); // TODO
	@Output() isShownViewListButton = new EventEmitter<boolean>();
	@Output() isShownSaveRouteButton = new EventEmitter<boolean>();

	coords;
	nameFormGroup: FormGroup;

	constructor() {}

	ngOnInit() {
		this.nameFormGroup = new FormGroup({
      from: new FormControl('Барановичи', [Validators.required]),
      to: new FormControl('Пинск', [Validators.required]),
      departureDate: new FormControl('1/1/2019', [Validators.required]),
      placesSelect: new FormControl('4', [Validators.required]),
      departureTime: new FormControl('12:00 am', [Validators.required]),
      car: new FormControl('ferrari'),
		});
	}

	onChangeFix(event: Event, target) {
		const input = event.target as HTMLInputElement;
		this.nameFormGroup.controls[target].setValue(input.value);
	}

	onSubmit() {
    if(this.userState === UserState.Driver) {
      this.formData.emit(this.nameFormGroup.value);
    }
    else{
      this.passengerFormData.emit(this.nameFormGroup.value);
    }
    this.isShownViewListButton.emit(true);
    this.isShownSaveRouteButton.emit(true);
	}

  isDriver() {
    return this.userState === UserState.Driver;
  }

  isPassenger() {
    return this.userState === UserState.Passenger;
  }
}
