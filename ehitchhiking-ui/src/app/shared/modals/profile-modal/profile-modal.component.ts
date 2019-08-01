import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '@shared/models/user';
import {FormGroup, FormBuilder} from '@angular/forms';
import {CarsInfoService} from './cars-info.service';
import {Car} from '@shared/models/car';
import {ProfileModalApiService} from '@shared/services/api.services/profile-modal.api.service';
@Component({
	selector: 'app-profile-modal',
	templateUrl: './profile-modal.component.html',
	styleUrls: ['./profile-modal.component.sass'],
	providers: [CarsInfoService],
})
export class ProfileModalComponent implements OnInit {
	readonly maxNumOfCars: number = 5;
	isLoading: boolean;
	currentUser: User;
	addCarMod: boolean;
	carsInfoForm: FormGroup;
	isSaveDisabled: boolean;

	constructor(
		public dialogRef: MatDialogRef<ProfileModalComponent>,
		private formBuilder: FormBuilder,
		private carsInfoService: CarsInfoService,
		private profileModalApiService: ProfileModalApiService
	) {}

	ngOnInit(): void {
		this.isSaveDisabled = true;
		this.isLoading = true;
		this.currentUser = this.profileModalApiService.getCurrentUser();
		this.profileModalApiService
			.getCarsList(this.currentUser.id)
			.then((cars) => {
				this.currentUser.cars = cars;
				this.carsInfoForm = this.carsInfoService.toFormGroup(cars, this.formBuilder);
			})
			.finally(() => {
				this.isLoading = false;
			});
	}

	close(): void {
		this.dialogRef.close();
	}

	toggleAddCarForm(): void {
		this.addCarMod = !this.addCarMod;
	}

	onSubmitNewCar(newCar: Car): void {
		this.isLoading = true;
		this.profileModalApiService
			.addNewCar(newCar, this.currentUser.id)
			.then((car) => {
				if (car) {
					this.currentUser.addCar(car);
					this.carsInfoForm = this.carsInfoService.toFormGroup(this.currentUser.cars, this.formBuilder);
				}
				this.addCarMod = false;
			})
			.finally(() => {
				this.isLoading = false;
			});
	}

	onSubmitCarsChanges(): void {
		const newCars = this.carsInfoService.getCarsInfo(
			this.carsInfoForm,
			this.currentUser.cars.length,
			this.currentUser.cars
		);
		this.isLoading = true;
		this.profileModalApiService
			.updateCars(newCars, this.currentUser.id)
			.then((response) => {
				if (!response) {
					return;
				}
				this.currentUser.cars = response;
				this.carsInfoForm = this.carsInfoService.toFormGroup(response, this.formBuilder);
			})
			.finally(() => {
				this.isLoading = false;
			});
	}

	onChange(): void {
		this.isSaveDisabled = this.carsInfoForm.invalid;
	}

	onCarDelete(event: MouseEvent, index: number): void {
		this.isLoading = true;
		this.profileModalApiService
			.deleteCar(this.currentUser.cars[index].id)
			.then((response) => {
				if (!response) {
					return;
				}
				this.currentUser.cars.splice(index, 1);
			})
			.finally(() => {
				this.isLoading = false;
			});
	}
}
