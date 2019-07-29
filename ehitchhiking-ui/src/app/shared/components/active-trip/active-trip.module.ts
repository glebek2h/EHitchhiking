import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatDialogModule, MatListModule, MatTableModule} from '@angular/material';

import {RatingModule} from '../rating/rating.module';
import {ActiveTripComponent} from './active-trip.component';
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
	],
	entryComponents: [ActiveTripComponent],
	exports: [ActiveTripComponent],
})
export class ActiveTripModule {}
