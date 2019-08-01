import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Car} from '@shared/models/car';
@Component({
	selector: 'app-car-info-form',
	templateUrl: './car-info-form.component.html',
	styleUrls: ['./car-info-form.component.sass'],
})
export class CarInfoFormComponent implements OnInit {
	@Input() carInfoForm: FormGroup;
	@Input() addCarMod: boolean;
	@Input() carIndex: number;
	@Output() onChangeCarInfo = new EventEmitter<Car>();
	addCarForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.initForm();
	}

	initForm(): void {
		this.addCarForm = this.formBuilder.group({
			model: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{3,50}$')]],
			color: ['', [Validators.required, Validators.pattern('^[a-zA-Z-]{3,20}$')]],
			number: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{6,8}$')]],
		});
	}

	hasError(controlName: string, errorName: string) {
		if (this.addCarMod) {
			return this.addCarForm.controls[controlName].hasError(errorName);
		}
		return (this.carInfoForm.controls[this.carIndex] as FormGroup).controls[controlName].hasError(errorName);
	}

	sendCarData(ifSubmit: boolean): void {
		if (!(ifSubmit && this.addCarMod) && this.addCarMod) {
			return;
		}
		const data = ifSubmit ? this.addCarForm.value : this.carInfoForm.value;
		const newCar = new Car(undefined, data.model, data.color, data.number);
		this.onChangeCarInfo.emit(newCar);
	}
}
