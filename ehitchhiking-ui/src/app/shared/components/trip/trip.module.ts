import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatTableModule, MatTooltipModule} from '@angular/material';
import {TripComponent} from './trip.component';
import {RatePassengersModalModule} from '../rate-passengers-modal/rate-passengers-modal.module';
import {RatingModule} from '../rating/rating.module';
@NgModule({
	declarations: [TripComponent],
	imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule, RatingModule, MatTooltipModule],
	entryComponents: [TripComponent],
	exports: [TripComponent],
})
export class TripModule {}
