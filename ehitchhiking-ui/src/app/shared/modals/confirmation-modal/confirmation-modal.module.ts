import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import {ConfirmationModalComponent} from '@shared/modals/confirmation-modal/confirmation-modal.component';

@NgModule({
	declarations: [ConfirmationModalComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
	],
	entryComponents: [ConfirmationModalComponent],
	exports: [ConfirmationModalComponent],
})
export class ConfirmationModalModule {}
