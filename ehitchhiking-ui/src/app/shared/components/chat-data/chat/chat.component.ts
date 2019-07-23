import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatService} from './chat.service';
import {MatDialogRef} from '@angular/material';

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
