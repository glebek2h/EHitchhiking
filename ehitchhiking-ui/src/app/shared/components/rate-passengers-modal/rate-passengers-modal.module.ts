import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatePassengersModalComponent} from './/rate-passengers-modal.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatTableModule} from '@angular/material';
import { RatingModule } from "../rating/rating.module";
import {RatePassengersApiService} from "@shared/services/api.services/rate-passengers-api.service";
@NgModule({
	declarations: [RatePassengersModalComponent],
	imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule, MatIconModule, RatingModule],
	entryComponents: [RatePassengersModalComponent],
	exports: [RatePassengersModalComponent],
  providers: [RatePassengersApiService]
})
export class RatePassengersModalModule {}
