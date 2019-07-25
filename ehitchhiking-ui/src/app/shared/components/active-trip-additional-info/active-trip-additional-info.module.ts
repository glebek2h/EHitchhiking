import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatListModule,
  MatTableModule
} from "@angular/material";

import {RatingModule} from '../rating/rating.module';
import { ActiveTripAdditionalInfoComponent } from "./active-trip-additional-info.component";
@NgModule({
  declarations: [ActiveTripAdditionalInfoComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule, RatingModule, MatCardModule, MatListModule, MatGridListModule],
  entryComponents: [ActiveTripAdditionalInfoComponent],
  exports: [ActiveTripAdditionalInfoComponent],
})
export class ActiveTripAdditionalInfoModule {}
