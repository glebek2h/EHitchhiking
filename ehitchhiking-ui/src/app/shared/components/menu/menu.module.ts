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
import {RatePassengersModalModule} from '../rate-passengers-modal/rate-passengers-modal.module';
import {ProfileModalModule} from '../../modals/profile-modal/profile-modal.module';
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {FormsModule} from '@angular/forms';
import {PreLoadingModule} from '../pre-loading/pre-loading.module';
import {NoDataModule} from '../no-data/no-data.module';
import {ChatComponent} from '../chat/chat.component';
import {TripsModalModule} from '../trips-modal/trips-modal.module';
import {TripModule} from '../trip/trip.module';
import {TripsModalComponent} from '../trips-modal/trips-modal.component';
import {DialogListComponent} from '../dialog-list/dialog-list.component';

@NgModule({
	declarations: [MenuComponent, BlacklistComponent, ChatComponent, DialogListComponent],
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
	],
	exports: [MenuComponent, BlacklistComponent, ChatComponent],
	entryComponents: [BlacklistComponent, ChatComponent, TripsModalComponent, DialogListComponent],
})
export class MenuModule {}
