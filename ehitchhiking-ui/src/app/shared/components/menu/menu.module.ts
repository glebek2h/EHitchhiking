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
	MatTabsModule,
} from '@angular/material';
import {RatePassengersModalModule} from '@shared/components/rate-passengers-modal/rate-passengers-modal.module';
import {ProfileModalModule} from '@shared/modals/profile-modal/profile-modal.module';
import {FormsModule} from '@angular/forms';
import {PreLoadingModule} from '../pre-loading/pre-loading.module';
import {NoDataModule} from '../no-data/no-data.module';
import {TripsModalModule} from '../trips-modal/trips-modal.module';
import {TripModule} from '../trip/trip.module';
import {TripsModalComponent} from '../trips-modal/trips-modal.component';
import {NotificationComponent} from '../notification/notification.component';
import {ChatDataModule} from '@shared/components/chat-data/chat-data.module';
import {ActiveTripsModalModule} from '@shared/components/active-trips-modal/active-trips-modal.module';
import {BlacklistModule} from '@shared/components/blacklist/blacklist.module';

@NgModule({
	declarations: [MenuComponent, NotificationComponent],
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
		ChatDataModule,
		MatTabsModule,
		ActiveTripsModalModule,
    BlacklistModule
	],
	exports: [MenuComponent],
	entryComponents: [NotificationComponent, TripsModalComponent],
})
export class MenuModule {}
