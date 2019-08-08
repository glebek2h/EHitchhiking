import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatGridListModule,
	MatListModule,
	MatTableModule,
	MatTooltipModule,
} from '@angular/material';

import {RatingModule} from '../rating/rating.module';
import {ActiveTripAdditionalInfoComponent} from './active-trip-additional-info.component';
import {NoDataModule} from '@shared/components/no-data/no-data.module';
@NgModule({
	declarations: [ActiveTripAdditionalInfoComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		MatDialogModule,
		MatTableModule,
		RatingModule,
		MatCardModule,
		MatListModule,
		MatGridListModule,
		MatTooltipModule,
		NoDataModule,
	],
	entryComponents: [ActiveTripAdditionalInfoComponent],
	exports: [ActiveTripAdditionalInfoComponent],
})
export class ActiveTripAdditionalInfoModule {}
