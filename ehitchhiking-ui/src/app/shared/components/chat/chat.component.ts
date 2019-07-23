import {Component, OnInit} from '@angular/core';
import {ChatService} from './chat.service';
import {MatDialogRef} from '@angular/material';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.sass'],
})
export class ChatComponent implements OnInit {
	showDialogs = false;
	showChat = true;
	readonly MAX_MESSAGE_LENGTH = 256;

	msgList: ChatMessage[] = [];

	constructor(public dialogRef: MatDialogRef<ChatComponent>) {}

	ngOnInit() {
		ChatService.getTestData().forEach((msg) => this.msgList.push(msg));
	}

	showContent() {
		this.showDialogs = true;
		this.showChat = false;
	}

	sendMessage(message: HTMLInputElement) {
		this.msgList.push(ChatService.messageData(message.value));
		message.value = '';
	}

	close(): void {
		this.dialogRef.close();
	}
}
