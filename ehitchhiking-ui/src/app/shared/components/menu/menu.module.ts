import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatIconModule,
  MatSidenavModule,
  MatTableModule,
} from '@angular/material';
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {FormsModule} from '@angular/forms';
import {PreLoadingModule} from '../pre-loading/pre-loading.module';
import {NoDataModule} from '../no-data/no-data.module';

@NgModule({
	declarations: [MenuComponent, BlacklistComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    PreLoadingModule,
    NoDataModule,
    MatCardModule,
    MatIconModule,
  ],
	entryComponents: [BlacklistComponent],
	exports: [MenuComponent, BlacklistComponent],
})
export class MenuModule {}
