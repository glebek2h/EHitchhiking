import {CarInfoFormComponent} from './car-info-form/car-info-form.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileModalComponent} from './profile-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule, MatIconModule, MatDialog} from '@angular/material';

@NgModule({
	declarations: [ProfileModalComponent, CarInfoFormComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, MatListModule, MatButtonModule, MatIconModule],
	entryComponents: [ProfileModalComponent],
	exports: [ProfileModalComponent],
})
export class ProfileModalModule {}
