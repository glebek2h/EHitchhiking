import {Component, ViewChild, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '@shared/models/user';
import {Car} from '@shared/models/car';
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
		this.currentUser = this.profileModalService.getCurrentUser();
		const userCars = this.currentUser ? this.currentUser.cars : [];
		this.carsInfoForm = this.carsInfoService.toFormGroup(userCars, this.formBuilder);
	}

	close(): void {
		this.dialogRef.close();
	}

	toggleAddCarForm(): void {
		this.addCarMod = !this.addCarMod;
	}

	onSubmitNewCar(newCar: Car): void {
		this.currentUser.addCar(newCar);
		this.carsInfoForm = this.carsInfoService.toFormGroup(this.currentUser.cars, this.formBuilder);
		this.addCarMod = false;
	}

	onSubmitCarsChanges(): void {
		const newCars = this.carsInfoService.getCarsInfo(this.carsInfoForm, this.currentUser.cars.length);
		this.currentUser.cars = newCars;
	}

	onChange(): void {
		this.submitButton.disabled = this.carsInfoForm.invalid;
	}

	onCarDelete(event: MouseEvent, index: number): void {
		this.currentUser.cars.splice(index, 1);
	}
}
