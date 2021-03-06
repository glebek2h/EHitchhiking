import {DialogListApiService} from './../../services/api.services/dialog-list.api.service';
import {ChatApiService} from './../../services/api.services/chat.api.service';
import {NoDataModule} from './../no-data/no-data.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogListComponent} from '@shared/components/chat-data/dialog-list/dialog-list.component';
import {
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatTooltipModule,
} from '@angular/material';
import {ChatComponent} from '@shared/components/chat-data/chat/chat.component';
import {PreLoadingModule} from '../pre-loading/pre-loading.module';
import {StompService} from 'ng2-stomp-service';

@NgModule({
	declarations: [DialogListComponent, ChatComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		NoDataModule,
		PreLoadingModule,
		MatTooltipModule,
	],
	providers: [ChatApiService, DialogListApiService, StompService],
	exports: [DialogListComponent, ChatComponent],
	entryComponents: [ChatComponent, DialogListComponent],
})
export class ChatDataModule {}
