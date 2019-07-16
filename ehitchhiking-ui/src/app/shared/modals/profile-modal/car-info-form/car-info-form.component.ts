import {Component, Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Car} from 'src/app/shared/models/car';
import {MatDialogRef} from '@angular/material';
@Component({
	selector: 'app-car-info-form',
	templateUrl: './car-info-form.component.html',
	styleUrls: ['./car-info-form.component.sass'],
})
export class CarInfoFormComponent {
	carInfoForm: FormGroup;

	constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<CarInfoFormComponent>) {
		this.initForm();
	}

	initForm() {
		this.carInfoForm = this.formBuilder.group({
			model: '',
			color: '',
			number: '',
			experience: null,
		});
	}

	public close() {
		this.dialogRef.close();
	}
}
