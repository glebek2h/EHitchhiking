import {ApiService} from './../../services/api.service';
import {Component, ViewChild, OnInit} from '@angular/core';
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
	user: User = new User('Yana', '', 'hello@gmail.com', '+375291234567', [
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
		private carsInfoService: CarsInfoService,
		private apiService: ApiService
	) {}

	ngOnInit(): void {
		this.apiService
			.doGet('http://localhost:8080/Employee/getEmployeeByUserName?username=BulletProof', true)
			.subscribe((data) => console.log(data));
		this.carsInfoForm = this.carsInfoService.toFormGroup(this.user.cars, this.formBuilder);
	}

	close(): void {
		this.dialogRef.close();
	}

	toggleAddCarForm(): void {
		this.addCarMod = !this.addCarMod;
	}

	onSubmitNewCar(newCar: Car): void {
		this.user.addCar(newCar);
		this.carsInfoForm = this.carsInfoService.toFormGroup(this.user.cars, this.formBuilder);
		this.addCarMod = false;
	}

	onSubmitCarsChanges(): void {
		const newCars = this.carsInfoService.getCarsInfo(this.carsInfoForm, this.user.cars.length);
		this.user.cars = newCars;
	}

	onChange(): void {
		this.submitButton.disabled = this.carsInfoForm.invalid;
	}

	onCarDelete(event: MouseEvent, index: number): void {
		this.user.cars.splice(index, 1);
	}
}
