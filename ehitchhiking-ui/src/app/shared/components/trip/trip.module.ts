import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
} from '@angular/material';
import { TripComponent } from "./trip.component";
@NgModule({
  declarations: [TripComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule],
  entryComponents: [TripComponent],
  exports: [TripComponent],
})
export class TripModule {}
