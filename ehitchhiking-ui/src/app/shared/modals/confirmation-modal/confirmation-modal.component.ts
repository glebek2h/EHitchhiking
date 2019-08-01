import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
	selector: 'app-confirmation-modal',
	templateUrl: './confirmation-modal.component.html',
	styleUrls: ['./confirmation-modal.component.sass'],
})
export class ConfirmationModalComponent implements OnInit {
	@Input() notification: string;

	constructor(
		public dialogRef: MatDialogRef<ConfirmationModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit() {}

	closeConfirmationDialog() {
		this.dialogRef.close(false);
	}

	confirm() {
		this.dialogRef.close(true);
	}
}
