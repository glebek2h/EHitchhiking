import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatePassengersModalComponent} from './/rate-passengers-modal.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatTableModule} from '@angular/material';
import { RatingModule } from "../rating/rating.module";
@NgModule({
	declarations: [RatePassengersModalComponent],
	imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule, MatIconModule, RatingModule],
	entryComponents: [RatePassengersModalComponent],
	exports: [RatePassengersModalComponent],
})
export class RatePassengersModalModule {}
