import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthorizationService} from '@shared/services/authorization.service';

@NgModule({
	declarations: [RegistrationComponent],
	imports: [
		MatButtonModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		CommonModule,
		MatIconModule,
	],
	entryComponents: [RegistrationComponent],
	exports: [RegistrationComponent, FormsModule],
	providers: [AuthorizationService],
})
export class RegistrationModule {}
