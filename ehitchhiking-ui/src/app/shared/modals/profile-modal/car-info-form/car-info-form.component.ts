import {Component, Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Car} from '../../../models/car';
@Component({
	selector: 'app-car-info-form',
	templateUrl: './car-info-form.component.html',
	styleUrls: ['./car-info-form.component.sass'],
})
export class CarInfoFormComponent {
	carInfoForm: FormGroup;
	@Input() car: Car;

	constructor(private formBuilder: FormBuilder) {
		this.initForm();
	}

	initForm() {
		this.carInfoForm = this.formBuilder.group({
			model: '',
			color: '',
			number: '',
			experience: 0,
		});
	}
}
