import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripsComponent} from './/trips.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
} from '@angular/material';
@NgModule({
  declarations: [TripsComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule],
  entryComponents: [TripsComponent],
  exports: [TripsComponent],
})
export class TripsModule {}
