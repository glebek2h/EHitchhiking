import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {
	MatCheckboxModule,
	MatDialogModule,
	MatSidenavModule,
	MatTableModule,
	MatIconModule,
	MatButtonModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileModalComponent} from '../../modals/profile-modal/profile-modal.component';
import {CarInfoFormComponent} from '../../modals/profile-modal/car-info-form/car-info-form.component';

@NgModule({
	declarations: [MenuComponent, ProfileModalComponent, CarInfoFormComponent],
	imports: [
		CommonModule,
		MatCheckboxModule,
		MatSidenavModule,
		FormsModule,
		MatTableModule,
		MatDialogModule,
		ReactiveFormsModule,
		MatIconModule,
		MatButtonModule,
	],
	exports: [MenuComponent],
	entryComponents: [ProfileModalComponent],
})
export class MenuModule {}
