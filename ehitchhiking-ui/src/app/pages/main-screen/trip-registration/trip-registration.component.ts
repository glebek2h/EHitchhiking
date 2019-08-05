import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '@shared/models/user';
import {UserState} from '@shared/enums/UserState';
import {UserService} from '@shared/services/user.service';
import {YandexMapService} from "@pages/main-screen/yandex-map/yandex-map.service";

@Component({
	selector: 'app-trip-registration',
	templateUrl: './trip-registration.component.html',
	styleUrls: ['./trip-registration.component.sass'],
})
export class TripRegistrationComponent implements OnInit, AfterViewInit {
	@Input() isShown: boolean;
	@Input() currentUser: User;
	@Input() userState: UserState;
	@Output() formData = new EventEmitter<any>(); // TODO
	@Output() passengerFormData = new EventEmitter<any>(); // TODO
	@Output() isShownViewListButton = new EventEmitter<boolean>();
	@Output() isShownSaveRouteButton = new EventEmitter<boolean>();

	coords;
	nameFormGroup: FormGroup;

	constructor(private userService: UserService, private yandexMapService: YandexMapService ) {}

	ngOnInit() {
		this.nameFormGroup = new FormGroup({
			from: new FormControl('', [Validators.required]),
			to: new FormControl('', [Validators.required]),
			departureDate: new FormControl('', [Validators.required]),
			placesSelect: new FormControl('', [Validators.required]),
			departureTime: new FormControl('', [Validators.required]),
			car: new FormControl(''),
		});
		if(this.userState === UserState.Driver) {
      this.nameFormGroup.controls.car.setValidators([Validators.required]);
    }
	}

  ngAfterViewInit(): void {
    this.yandexMapService.getPromise().then((maps) => {
      // tslint:disable-next-line:no-unused-expression
      new maps.SuggestView('suggestions-to-input-from');
      // tslint:disable-next-line:no-unused-expression
      new maps.SuggestView('suggestions-to-input-to');
    });
  }

	onChangeFix(event: Event, target) {
		const input = event.target as HTMLInputElement;
		this.nameFormGroup.controls[target].setValue(input.value);
	}

	onSubmit() {
    this.nameFormGroup.reset();
		if (this.userState === UserState.Driver) {
			this.formData.emit(this.nameFormGroup.value);
		} else {
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
