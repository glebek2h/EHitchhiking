import {CarInfoFormComponent} from './car-info-form/car-info-form.component';
import {Component, ViewChild, QueryList, ViewChildren, AfterViewInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '../../models/user';
import {Car} from '../../models/car';
@Component({
	selector: 'app-profile-modal',
	templateUrl: './profile-modal.component.html',
	styleUrls: ['./profile-modal.component.sass'],
})
export class ProfileModalComponent implements AfterViewInit {
	readonly maxNumOfCars: number = 5;
	user: User = new User('yana', '', 'hello@gmail.com', '+375291234567', [
		new Car('ferrari', 'pink', 'A3434B', 1),
		new Car('lada', 'white', 'A3434B', 5),
		new Car('tayota', 'yellow', 'A3434B', 3),
		new Car('bmw', 'black', 'A3434B', 1),
	]);
	addCarMod: boolean;
	@ViewChild('submitChanges', {static: false}) submitButton;

	constructor(public dialogRef: MatDialogRef<ProfileModalComponent>) {}

	ngAfterViewInit() {}

	public close() {
		this.dialogRef.close();
	}

	public toggleAddCarForm() {
		this.addCarMod = !this.addCarMod;
	}

	public onSubmitNewCar(newCar: Car) {
		this.user.addCar(newCar);
		this.addCarMod = false;
	}

	public onSubmitCarsChanges() {}

	public onChange(changedCar: Car, index: number) {
		this.submitButton.disabled = false;
	}
}
