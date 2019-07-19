import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatePassengersModalComponent} from './/rate-passengers-modal.component';
import {RatingComponent} from '../rating/rating.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatTableModule} from '@angular/material';
@NgModule({
	declarations: [RatePassengersModalComponent, RatingComponent],
	imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule, MatIconModule],
	entryComponents: [RatePassengersModalComponent],
	exports: [RatePassengersModalComponent, RatingComponent],
})
export class RatePassengersModalModule {}
