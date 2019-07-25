import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'app-trip-registration',
	templateUrl: './trip-registration.component.html',
	styleUrls: ['./trip-registration.component.sass'],
})
export class TripRegistrationComponent implements OnInit {
	@Input() isShown: boolean;
	@Output() formData = new EventEmitter<any>(); // TODO
	@Output() isShownViewListButton = new EventEmitter<boolean>();
	@Output() isShownSaveRouteButton = new EventEmitter<boolean>();

	nameFormGroup: FormGroup;

	constructor() {}

	ngOnInit() {
		this.nameFormGroup = new FormGroup({
      from: new FormControl('', /*[Validators.required]*/),
      to: new FormControl('', /*[Validators.required]*/),
      departureDate: new FormControl('', /*[Validators.required]*/),
      placesSelect: new FormControl('', /*[Validators.required]*/),
      departureTime: new FormControl('', /*[Validators.required]*/),
		});
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
}
