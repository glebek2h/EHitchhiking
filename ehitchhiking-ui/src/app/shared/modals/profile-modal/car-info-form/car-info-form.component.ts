import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Car} from '../../../models/car';
@Component({
	selector: 'app-car-info-form',
	templateUrl: './car-info-form.component.html',
	styleUrls: ['./car-info-form.component.sass'],
})
export class CarInfoFormComponent implements OnInit {
	carInfoForm: FormGroup;
	@Input() car: Car;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		console.log(this.car);
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
