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
import {NoDataModule} from '../no-data/no-data.module';
import {PreLoadingModule} from '../pre-loading/pre-loading.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ActiveTripsModalComponent} from './active-trips-modal.component';
import {ActiveTripModule} from '../active-trip/active-trip.module';
import {TripsModalModule} from '../trips-modal/trips-modal.module';
import {ActiveTripAdditionalInfoModule} from '../active-trip-additional-info/active-trip-additional-info.module';
import {ActiveTripsApiService} from '@shared/services/api.services/active-trips.api.service';

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
    ReactiveFormsModule
  ],
	providers: [ActiveTripsApiService],
	entryComponents: [ActiveTripsModalComponent],
	exports: [ActiveTripsModalComponent],
})
export class ActiveTripsModalModule {}
