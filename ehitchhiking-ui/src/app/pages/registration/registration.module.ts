import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotificationService} from '@shared/services/notification.service';
import {UserService} from "@shared/services/user.service";

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
	providers: [UserService, NotificationService],
})
export class RegistrationModule {}
