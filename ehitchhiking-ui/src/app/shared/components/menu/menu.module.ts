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
	MatSnackBarModule,
} from '@angular/material';
import {RatePassengersModalModule} from '../rate-passengers-modal/rate-passengers-modal.module';
import {ProfileModalModule} from '../../modals/profile-modal/profile-modal.module';
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {FormsModule} from '@angular/forms';
import {PreLoadingModule} from '../pre-loading/pre-loading.module';
import {NoDataModule} from '../no-data/no-data.module';
import {NotificationComponent} from '../notification/notification.component';
import {TripsModalModule} from '../trips-modal/trips-modal.module';
import {TripModule} from '../trip/trip.module';
import {TripsModalComponent} from '../trips-modal/trips-modal.component';

@NgModule({
	declarations: [MenuComponent, BlacklistComponent, NotificationComponent],
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
		TripModule,
		TripsModalModule,
		MatCardModule,
		MatSnackBarModule,
	],
	exports: [MenuComponent, BlacklistComponent],
	entryComponents: [BlacklistComponent, NotificationComponent, TripsModalComponent],
})
export class MenuModule {}
