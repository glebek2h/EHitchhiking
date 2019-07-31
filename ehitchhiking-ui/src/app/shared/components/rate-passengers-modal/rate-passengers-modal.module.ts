import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatePassengersModalComponent} from './/rate-passengers-modal.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatTableModule} from '@angular/material';
import { RatingModule } from "../rating/rating.module";
import {RatePassengersApiService} from "@shared/services/api.services/rate-passengers-api.service";
import {PreLoadingModule} from "@shared/components/pre-loading/pre-loading.module";
@NgModule({
	declarations: [RatePassengersModalComponent],
	imports: [CommonModule, MatButtonModule,PreLoadingModule, MatDialogModule, MatTableModule, MatIconModule, RatingModule],
	entryComponents: [RatePassengersModalComponent],
	exports: [RatePassengersModalComponent],
  providers: [RatePassengersApiService]
})
export class RatePassengersModalModule {}
