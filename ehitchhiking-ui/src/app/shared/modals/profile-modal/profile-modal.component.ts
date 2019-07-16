import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '../../models/user';
import {Car} from '../../models/car';
@Component({
	selector: 'app-profile-modal',
	templateUrl: './profile-modal.component.html',
	styleUrls: ['./profile-modal.component.sass'],
})
export class ProfileModalComponent {
	readonly maxNumOfCars: number = 5;
	user: User = new User('yana', '', 'hello@gmail.com', '+375291234567', [
		new Car('ferrari', 'pink', 'A3434B', 1),
		new Car('ferrari', 'pink', 'A3434B', 1),
		new Car('ferrari', 'pink', 'A3434B', 1),
		new Car('ferrari', 'pink', 'A3434B', 1),
	]);

	constructor(public dialogRef: MatDialogRef<ProfileModalComponent>) {}

	public close() {
		this.dialogRef.close();
	}

	public toggleAddCarForm(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const addMod = target.classList.contains('profile-car-icon-add') ? true : false;
		const dataContainer = target.closest('.profile-data');
		(dataContainer.querySelector('.profile-add-car-button') as HTMLElement).style.display = addMod ? 'none' : '';
		(dataContainer.querySelector('.profile-close-car-button') as HTMLElement).style.display = addMod ? '' : 'none';
		(dataContainer.querySelector('.car-info-container') as HTMLElement).hidden = addMod ? true : false;
		(dataContainer.querySelector('.add-car-container') as HTMLElement).hidden = addMod ? false : true;
	}

	public addCar(event: any) {}
}
