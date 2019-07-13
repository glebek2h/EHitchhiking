import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule,
  MatSidenavModule, MatTableModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RatePassangersModalComponent} from '../rate-passangers-modal/rate-passangers-modal.component';
import {RatingComponent} from '../rating/rating.component';

@NgModule({
	declarations: [ MenuComponent, RatePassangersModalComponent, RatingComponent ],
	imports: [
		CommonModule,
		MatCheckboxModule,
		MatSidenavModule,
		FormsModule,
		MatButtonModule,
    MatTableModule,
    MatDialogModule
	],
	exports: [MenuComponent],
  entryComponents: [
    RatePassangersModalComponent, // todo: move RatePassangersModalComponent to separate module
  ],
})
export class MenuModule {}
