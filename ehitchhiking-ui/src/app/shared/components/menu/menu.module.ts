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
import {RatePassengersModalModule} from '../rate-passengers-modal/rate-passengers-modal.module';
import {ProfileModalModule} from '../../modals/profile-modal/profile-modal.module';

@NgModule({
	declarations: [MenuComponent],
	imports: [
		CommonModule,
		MatCheckboxModule,
		MatSidenavModule,
		MatTableModule,
		MatDialogModule,
		MatIconModule,
		MatButtonModule,
		RatePassengersModalModule,
		ProfileModalModule,
	],
	exports: [MenuComponent],
	entryComponents: [],
})
export class MenuModule {}
