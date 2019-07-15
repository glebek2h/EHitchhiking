import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '../../models/user';

@Component({
	selector: 'app-profile-modal',
	templateUrl: './profile-modal.component.html',
	styleUrls: ['./profile-modal.component.sass'],
})
export class ProfileModalComponent {
	user: User = new User('yana', 'hello@gmail.com', '+375291234567');
	constructor(public dialogRef: MatDialogRef<ProfileModalComponent>) {}

	public close() {
		this.dialogRef.close();
	}
}
