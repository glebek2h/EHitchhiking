import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatDialogModule, MatIconModule, MatTableModule} from '@angular/material';
import {TripModule} from '../trip/trip.module';
import {NoDataModule} from '../no-data/no-data.module';
import {PreLoadingModule} from '../pre-loading/pre-loading.module';
import {TripsModalComponent} from './trips-modal.component';
@NgModule({
	declarations: [TripsModalComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		MatDialogModule,
		MatTableModule,
		TripModule,
		NoDataModule,
		PreLoadingModule,
		MatIconModule,
	],
	entryComponents: [TripsModalComponent],
	exports: [TripsModalComponent],
})
export class TripsModalModule {}
