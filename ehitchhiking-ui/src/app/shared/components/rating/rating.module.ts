import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingComponent} from '../rating/rating.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatTableModule} from '@angular/material';
@NgModule({
	declarations: [RatingComponent],
	imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule, MatIconModule],
	entryComponents: [RatingComponent],
	exports: [RatingComponent],
})
export class RatingModule {}
