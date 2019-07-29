import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule, MatSlideToggleModule,
  MatTableModule
} from "@angular/material";
import {TripModule} from '../trip/trip.module';
import {NoDataModule} from '../no-data/no-data.module';
import {PreLoadingModule} from '../pre-loading/pre-loading.module';
import {TripsModalComponent} from './trips-modal.component';
import {SortTripsPipe} from "../../pipes/sort-trips.pipe";
import {FilterByRolePipe} from "../../pipes/filter-by-role.pipe";
import {FormsModule} from "@angular/forms";
import {FilterByFavoritePipe} from "../../pipes/filter-by-favorite.pipe";
import {RatePassengersModalModule} from "@shared/components/rate-passengers-modal/rate-passengers-modal.module";

@NgModule({
  declarations: [TripsModalComponent, SortTripsPipe, FilterByRolePipe, FilterByFavoritePipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    TripModule,
    NoDataModule,
    RatePassengersModalModule,
    PreLoadingModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule
  ],
	entryComponents: [TripsModalComponent],
  exports: [TripsModalComponent, SortTripsPipe],
})
export class TripsModalModule {}
