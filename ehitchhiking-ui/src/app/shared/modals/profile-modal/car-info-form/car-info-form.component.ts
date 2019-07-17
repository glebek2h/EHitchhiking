import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Car} from '../../../models/car';
@Component({
	selector: 'app-car-info-form',
	templateUrl: './car-info-form.component.html',
	styleUrls: ['./car-info-form.component.sass'],
})
export class CarInfoFormComponent implements OnInit {
	carInfoForm: FormGroup;
	@Input() car: Car;
	@Input() addCarMod: boolean;
	@Output() onChangeCarInfo = new EventEmitter<Car>();

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.initForm();
	}

	initForm() {
		this.carInfoForm = this.formBuilder.group({
			model: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{3,50}$')]],
			color: ['', [Validators.required, Validators.pattern('^[a-zA-Z-]{3,20}$')]],
			carNumber: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{6,8}$')]],
			experience: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}$'), Validators.max(80)]],
		});
	}

	public hasError = (controlName: string, errorName: string) => {
		return this.carInfoForm.controls[controlName].hasError(errorName);
	};

	public sendCarData(event: any) {
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
