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
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {FormsModule} from '@angular/forms';
import {PreLoadingComponent} from '../pre-loading/pre-loading.component';

@NgModule({
	declarations: [MenuComponent, BlacklistComponent, PreLoadingComponent],
	imports: [
		CommonModule,
		MatCheckboxModule,
		MatSidenavModule,
		FormsModule,
		MatButtonModule,
		MatTableModule,
		MatDialogModule,
	],
	entryComponents: [BlacklistComponent],
	exports: [MenuComponent, BlacklistComponent, PreLoadingComponent],
})
export class MenuModule {}
