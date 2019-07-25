import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatService} from './chat.service';
import {MatDialogRef} from '@angular/material';
import {NoDataSize} from '@shared/enums/no-data-sizes';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.sass'],
})
export class ChatComponent implements OnInit {
	showChat = false;
	showDialogs = true;
	readonly MAX_MESSAGE_LENGTH = 256;
	msgList: ChatMessage[] = [];
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No messages!';
	noDataIconName = 'accessibility';
	loading = false;

	constructor(public dialogRef: MatDialogRef<ChatComponent>) {}

	ngOnInit() {}

	getChat(chatInfo: any) {
		this.msgList = chatInfo;
	}

	showContent() {
		this.showChat = !this.showChat;
		this.showDialogs = !this.showDialogs;
	}

	sendMessage(message: HTMLInputElement) {
		this.msgList.push(ChatService.messageData(message.value));
		message.value = '';
	}

	close(): void {
		this.dialogRef.close();
	}
}
