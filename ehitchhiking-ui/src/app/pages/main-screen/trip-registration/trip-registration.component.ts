import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '@shared/models/user';
import {UserState} from '@shared/enums/UserState';

@Component({
	selector: 'app-trip-registration',
	templateUrl: './trip-registration.component.html',
	styleUrls: ['./trip-registration.component.sass'],
})
export class TripRegistrationComponent implements OnInit, OnChanges {
	@Input() isShown: boolean;
  @Input() user: User;
  @Input() userState: UserState;
	@Output() formData = new EventEmitter<any>(); // TODO
	@Output() isShownViewListButton = new EventEmitter<boolean>();
	@Output() isShownSaveRouteButton = new EventEmitter<boolean>();

	nameFormGroup: FormGroup;
  isInit: boolean;

	constructor() {}

	ngOnInit() {
		this.nameFormGroup = new FormGroup({
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),
      departureDate: new FormControl('', [Validators.required]),
      placesSelect: new FormControl('', [Validators.required]),
      departureTime: new FormControl('', [Validators.required]),
      car: new FormControl(''),
		});
    this.isInit = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userState && this.isInit) {

      this.nameFormGroup.controls.from.reset();
      this.nameFormGroup.controls.to.reset();
      this.nameFormGroup.controls.departureDate.reset();
      this.nameFormGroup.controls.placesSelect.reset();
      this.nameFormGroup.controls.departureTime.reset();
      this.nameFormGroup.controls.from.setErrors(null);
      this.nameFormGroup.controls.to.setErrors(null);
      this.nameFormGroup.controls.departureDate.setErrors(null);
      this.nameFormGroup.controls.placesSelect.setErrors(null);
      this.nameFormGroup.controls.departureTime.setErrors(null);
      /*	this.nameFormGroup.controls.from.updateValueAndValidity();
        this.nameFormGroup.controls.to.updateValueAndValidity();
        this.nameFormGroup.controls.departureDate.updateValueAndValidity();
        this.nameFormGroup.controls.placesSelect.updateValueAndValidity();
        this.nameFormGroup.controls.departureTime.updateValueAndValidity();*/
    }
  }

	onChangeFix(event: Event, target) {
		const input = event.target as HTMLInputElement;
		this.nameFormGroup.controls[target].setValue(input.value);
	}

	onSubmit() {
		this.formData.emit(this.nameFormGroup.value);
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
