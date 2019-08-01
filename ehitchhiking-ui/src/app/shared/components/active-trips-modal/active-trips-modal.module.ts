import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
	MatButtonModule,
	MatDialogModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatIconModule,
	MatSelectModule,
	MatSlideToggleModule,
	MatTableModule,
} from '@angular/material';
import {TripModule} from '../trip/trip.module';
import {NoDataModule} from '../no-data/no-data.module';
import {PreLoadingModule} from '../pre-loading/pre-loading.module';
import {SortTripsPipe} from '../../pipes/sort-trips.pipe';
import {FilterByRolePipe} from '../../pipes/filter-by-role.pipe';
import {FormsModule} from '@angular/forms';
import {FilterByFavoritePipe} from '../../pipes/filter-by-favorite.pipe';
import {ActiveTripsModalComponent} from './active-trips-modal.component';
import {ActiveTripsModalService} from './active-trips-modal.service';
import {AppModule} from '../../../app.module';
import {ActiveTripModule} from '../active-trip/active-trip.module';
import {TripsModalModule} from '../trips-modal/trips-modal.module';
import {ActiveTripAdditionalInfoModule} from '../active-trip-additional-info/active-trip-additional-info.module';
import { ConfirmationModalModule } from "@shared/modals/confirmation-modal/confirmation-modal.module";

@NgModule({
	declarations: [ActiveTripsModalComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		MatDialogModule,
		MatTableModule,
		NoDataModule,
		PreLoadingModule,
		MatIconModule,
		FormsModule,
		MatFormFieldModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatExpansionModule,
		ActiveTripModule,
		ActiveTripAdditionalInfoModule,
		TripsModalModule,
	],
	entryComponents: [ActiveTripsModalComponent],
	exports: [ActiveTripsModalComponent],
})
export class ActiveTripsModalModule {}
