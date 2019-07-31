import {Component, ViewChild, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '@shared/models/user';
import {FormGroup, FormBuilder} from '@angular/forms';
import {CarsInfoService} from './cars-info.service';
import {ProfileModalService} from '@shared/services/profile-modal.service';
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
	@ViewChild('submitChanges', {static: false}) submitButton;

	constructor(
		public dialogRef: MatDialogRef<ProfileModalComponent>,
		private formBuilder: FormBuilder,
		private carsInfoService: CarsInfoService,
		private profileModalService: ProfileModalService
	) {}

	ngOnInit(): void {
		this.isLoading = true;
		this.currentUser = this.profileModalService.getCurrentUser();
		this.profileModalService.getCarsList(this.currentUser.id).then((cars) => {
			this.currentUser.cars = cars;
			this.carsInfoForm = this.carsInfoService.toFormGroup(cars, this.formBuilder);
			this.isLoading = false;
		});
	}

	close(): void {
		this.dialogRef.close();
	}

	toggleAddCarForm(): void {
		this.addCarMod = !this.addCarMod;
	}

	onSubmitNewCar(newCar: any): void {
		this.isLoading = true;
		this.profileModalService.addNewCar(newCar, this.currentUser.id).then((car) => {
			if (car) {
				this.currentUser.addCar(car);
				this.carsInfoForm = this.carsInfoService.toFormGroup(this.currentUser.cars, this.formBuilder);
			}
			this.addCarMod = false;
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
		this.profileModalService.updateCars(newCars, this.currentUser.id).then((response) => {
			if (response) {
				this.currentUser.cars = response;
				this.carsInfoForm = this.carsInfoService.toFormGroup(response, this.formBuilder);
				this.isLoading = false;
			}
		});
	}

	onChange(): void {
		this.submitButton.disabled = this.carsInfoForm.invalid;
	}

	onCarDelete(event: MouseEvent, index: number): void {
		this.isLoading = true;
		this.profileModalService.deleteCar(this.currentUser.cars[index].id).then((response) => {
			if (response) {
				this.currentUser.cars.splice(index, 1);
				this.isLoading = false;
			}
		});
	}
}
