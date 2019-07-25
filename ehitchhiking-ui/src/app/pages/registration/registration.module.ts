import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {MatButtonModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
	declarations: [RegistrationComponent],
	imports: [MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, CommonModule],
	entryComponents: [RegistrationComponent],
	exports: [RegistrationComponent],
})
export class RegistrationModule {}
