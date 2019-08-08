import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatListModule,
  MatTableModule,
  MatTooltipModule
} from "@angular/material";

import {RatingModule} from '../rating/rating.module';
import {ActiveTripComponent} from './active-trip.component';
import {ConfirmationModalModule} from '@shared/modals/confirmation-modal/confirmation-modal.module';
@NgModule({
	declarations: [ActiveTripComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    RatingModule,
    MatCardModule,
    MatListModule,
    ConfirmationModalModule,
    MatTooltipModule
  ],
	entryComponents: [ActiveTripComponent],
	exports: [ActiveTripComponent],
})
export class ActiveTripModule {}
