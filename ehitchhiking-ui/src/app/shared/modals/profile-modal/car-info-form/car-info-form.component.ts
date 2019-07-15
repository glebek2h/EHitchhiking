import {Component, Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Car} from 'src/app/shared/models/car';
@Component({
	selector: 'app-car-info-form',
	templateUrl: './car-info-form.component.html',
	styleUrls: ['./car-info-form.component.css'],
})
export class CarInfoFormComponent {
	carInfoForm: FormGroup;
	@Input() cars: Car[];

	constructor(private formBuilder: FormBuilder) {
		this.initForm();
	}

	initForm() {
		this.carInfoForm = this.formBuilder.group({
			model: ' ',
			color: ' ',
			number: ' ',
			experience: 0,
		});
	}
}
