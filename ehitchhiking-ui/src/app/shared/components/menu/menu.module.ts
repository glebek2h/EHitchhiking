import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatSidenavModule,
	MatTableModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [MenuComponent],
	imports: [
		CommonModule,
		MatCheckboxModule,
		MatSidenavModule,
		FormsModule,
		MatButtonModule,
		MatTableModule,
		MatDialogModule,
	],
	exports: [MenuComponent],
})
export class MenuModule {}
