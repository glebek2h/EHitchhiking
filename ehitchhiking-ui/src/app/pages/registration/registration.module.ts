import {AuthorizationService} from '@shared/services/authorization.service';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {MatButtonModule, MatInputModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NotificationService} from '@shared/services/notification.service';

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
	exports: [RegistrationComponent],
	providers: [AuthorizationService, NotificationService],
})
export class RegistrationModule {}
