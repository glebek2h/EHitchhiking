import {CarInfoFormComponent} from './car-info-form/car-info-form.component';
import {Component, ViewChild, QueryList, ViewChildren, AfterViewInit, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '../../models/user';
import {Car} from '../../models/car';
import {FormGroup, FormBuilder} from '@angular/forms';
import {CarsInfoService} from './cars-info.service';
@Component({
	selector: 'app-profile-modal',
	templateUrl: './profile-modal.component.html',
	styleUrls: ['./profile-modal.component.sass'],
	providers: [CarsInfoService],
})
export class ProfileModalComponent implements OnInit {
	readonly maxNumOfCars: number = 5;
	user: User = new User('yana', '', 'hello@gmail.com', '+375291234567', [
		new Car('ferrari', 'pink', 'A3434B', 1),
		new Car('lada', 'white', 'A3434B', 5),
		new Car('tayota', 'yellow', 'A3434B', 3),
		new Car('bmw', 'black', 'A3434B', 1),
	]);
	addCarMod: boolean;
	carsInfoForm: FormGroup;
	@ViewChild('submitChanges', {static: false}) submitButton;

	constructor(
		public dialogRef: MatDialogRef<ProfileModalComponent>,
		private formBuilder: FormBuilder,
		private carsInfoService: CarsInfoService
	) {}

	ngOnInit() {
		this.carsInfoForm = this.carsInfoService.toFormGroup(this.user.cars, this.formBuilder);
	}

	public close() {
		this.dialogRef.close();
	}

	public toggleAddCarForm() {
		this.addCarMod = !this.addCarMod;
	}

	public onSubmitNewCar(newCar: Car) {
		this.user.addCar(newCar);
		this.carsInfoForm = this.carsInfoService.toFormGroup(this.user.cars, this.formBuilder);
		this.addCarMod = false;
	}

	public onSubmitCarsChanges() {
		const newCars = this.carsInfoService.getCarsInfo(this.carsInfoForm, this.user.cars.length);
		this.user.cars = newCars;
	}

	public onChange(changedCar: Car, index: number) {
		this.submitButton.disabled = this.carsInfoForm.invalid;
	}
}
