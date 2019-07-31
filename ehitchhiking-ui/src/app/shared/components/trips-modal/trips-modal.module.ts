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
import {TripsModalComponent} from './trips-modal.component';
import {FilterByRolePipe} from '../../pipes/filter-by-role.pipe';
import {FilterByFavoritePipe} from '../../pipes/filter-by-favorite.pipe';
import {RatePassengersModalModule} from '@shared/components/rate-passengers-modal/rate-passengers-modal.module';
import {SortTripsPipe} from '../../pipes/sort-trips.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterByStatusPipe} from '../../pipes/filter-by-status.pipe';
import {FilterByRatingPipe} from '@shared/pipes/filter-by-rating.pipe';

@NgModule({
	declarations: [
		TripsModalComponent,
		SortTripsPipe,
		FilterByRolePipe,
		FilterByFavoritePipe,
		FilterByStatusPipe,
		FilterByRatingPipe,
	],
	imports: [
		CommonModule,
		MatButtonModule,
		MatDialogModule,
		MatTableModule,
		TripModule,
		NoDataModule,
		PreLoadingModule,
		MatIconModule,
		FormsModule,
		MatFormFieldModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatExpansionModule,
		RatePassengersModalModule,
		ReactiveFormsModule,
	],
	entryComponents: [TripsModalComponent],
	exports: [TripsModalComponent, SortTripsPipe, FilterByRolePipe],
})
export class TripsModalModule {}
