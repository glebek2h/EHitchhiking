import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlacklistComponent} from '@shared/components/blacklist/blacklist.component';
import {BlackListApiService} from '@shared/services/api.services/black-list-api.service';
import {PreLoadingModule} from '@shared/components/pre-loading/pre-loading.module';
import {NoDataModule} from '@shared/components/no-data/no-data.module';
import {
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatIconModule,
	MatTabsModule,
	MatTooltipModule,
} from '@angular/material';

@NgModule({
	declarations: [BlacklistComponent],
	imports: [
		CommonModule,
		PreLoadingModule,
		NoDataModule,
		MatTabsModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatTooltipModule,
	],
	exports: [BlacklistComponent],
	entryComponents: [BlacklistComponent],
	providers: [BlackListApiService],
})
export class BlacklistModule {}
