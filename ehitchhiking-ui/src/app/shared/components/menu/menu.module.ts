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
	MatCardModule,
} from '@angular/material';
import {RatePassengersModalModule} from '@shared/components/rate-passengers-modal/rate-passengers-modal.module';
import {ProfileModalModule} from '@shared/modals/profile-modal/profile-modal.module';
import {BlacklistComponent} from '@shared/components/blacklist/blacklist.component';
import {FormsModule} from '@angular/forms';
import {PreLoadingModule} from '@shared/components/pre-loading/pre-loading.module';
import {NoDataModule} from '@shared/components/no-data/no-data.module';

@NgModule({
	declarations: [MenuComponent, BlacklistComponent],
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
		FormsModule,
		PreLoadingModule,
		NoDataModule,
		MatCardModule,
	],
	exports: [MenuComponent, BlacklistComponent],
	entryComponents: [BlacklistComponent],
})
export class MenuModule {}
