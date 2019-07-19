import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripsComponent} from './/trips.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
} from '@angular/material';
import { TripModule } from "../trip/trip.module";
import { NoDataModule } from "../no-data/no-data.module";
import { PreLoadingModule } from "../pre-loading/pre-loading.module";
@NgModule({
  declarations: [TripsComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule, TripModule, NoDataModule, PreLoadingModule],
  entryComponents: [TripsComponent],
  exports: [TripsComponent],
})
export class TripsModule {}
