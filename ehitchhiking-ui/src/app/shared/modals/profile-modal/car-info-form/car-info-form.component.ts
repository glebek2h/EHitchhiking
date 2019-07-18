import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Car} from '../../../models/car';
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
		if (this.addCarMod) {
			this.initForm();
		}
	}

	initForm(): void {
		this.addCarForm = this.formBuilder.group({
			model: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{3,50}$')]],
			color: ['', [Validators.required, Validators.pattern('^[a-zA-Z-]{3,20}$')]],
			carNumber: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{6,8}$')]],
			experience: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}$'), Validators.max(80)]],
		});
	}

	hasError(controlName: string, errorName: string) {
		if (this.addCarMod) {
			return this.addCarForm.controls[controlName].hasError(errorName);
		}
		return (this.carInfoForm.controls[this.carIndex] as FormGroup).controls[controlName].hasError(errorName);
	}

	sendCarData(event: any, ifSubmit: boolean): void {
		if (!(ifSubmit && this.addCarMod) && this.addCarMod) {
			return;
		}
		const inputs = event.target.classList.contains('car-form-input')
			? event.target.closest('.car-form').getElementsByClassName('car-form-input')
			: event.target.getElementsByClassName('car-form-input');

		const model = inputs[0].value;
		const color = inputs[1].value;
		const carNumber = inputs[2].value;
		const experience = inputs[3].value;

		const newCar = new Car(model, color, carNumber, experience);
		this.onChangeCarInfo.emit(newCar);
	}
}
