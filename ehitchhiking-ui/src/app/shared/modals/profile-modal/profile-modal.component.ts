import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';

@Component({
	selector: 'app-profile-modal',
	templateUrl: './profile-modal.component.html',
	styleUrls: ['./profile-modal.component.sass'],
})
export class ProfileModalComponent {
	constructor(public dialogRef: MatDialogRef<ProfileModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	public close() {
		this.dialogRef.close();
	}
}
