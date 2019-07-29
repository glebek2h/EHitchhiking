import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {MatButtonModule, MatInputModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

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
})
export class RegistrationModule {}
