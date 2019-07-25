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
} from '@angular/material';
import {ChatComponent} from '@shared/components/chat-data/chat/chat.component';

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
	],
	exports: [DialogListComponent, ChatComponent, NoDataModule],
	entryComponents: [ChatComponent, DialogListComponent],
})
export class ChatDataModule {}
