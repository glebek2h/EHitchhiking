import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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

  registerForm: FormGroup;
  isInit: boolean;

  submitted = false;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
    this.registerForm = this.formBuilder.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      departureDate:['', [Validators.required]],
      placesSelect: ['', [Validators.required]],
      departureTime:['', [Validators.required]],
      car: ['']
    });
    this.isInit = true;
  }

  get f() { return this.registerForm.controls; }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userState && this.isInit) {
      this.submitted = false;
      this.registerForm.reset();
    }
  }

	onChangeFix(event: Event, target) {
		const input = event.target as HTMLInputElement;
		this.registerForm.controls[target].setValue(input.value);
	}

	onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

		this.formData.emit(this.registerForm.value);
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
