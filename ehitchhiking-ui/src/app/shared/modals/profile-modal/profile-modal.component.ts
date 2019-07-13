import {Component, Input} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
	selector: 'app-profile-modal',
	templateUrl: './profile-modal.component.html',
	styleUrls: ['./profile-modal.component.sass'],
})
export class ProfileModalComponent {
	@Input() user: User;
	constructor(public dialogRef: MatDialogRef<ProfileModalComponent>) {}
}
