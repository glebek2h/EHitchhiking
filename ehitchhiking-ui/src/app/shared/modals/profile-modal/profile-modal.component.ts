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
	maxNumOfCars: number = 5;
	user: User = new User(
		'yana',
		'../../../../assets/images/exadel-logo-хing.jpg',
		'hello@gmail.com',
		'+375291234567',
		[
			new Car('ferrari', 'pink', 'A3434B', 1),
			new Car('ferrari', 'pink', 'A3434B', 1),
			new Car('ferrari', 'pink', 'A3434B', 1),
			new Car('ferrari', 'pink', 'A3434B', 1),
			new Car('ferrari', 'pink', 'A3434B', 1),
		]
	);

	constructor(public dialogRef: MatDialogRef<ProfileModalComponent>) {}

	public close() {
		this.dialogRef.close();
	}
}
