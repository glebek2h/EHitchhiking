import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {MatButtonModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [RegistrationComponent],
	imports: [MatButtonModule, FormsModule],
	entryComponents: [RegistrationComponent],
	exports: [RegistrationComponent],
})
export class RegistrationModule {}
