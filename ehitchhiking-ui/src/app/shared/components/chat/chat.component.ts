import {Component, OnInit} from '@angular/core';
import {ChatService} from './chat.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.sass'],
})
export class ChatComponent implements OnInit {
	showChat = true;
	showDialogs = false;
	readonly MAX_MESSAGE_LENGTH = 256;

	msgList: ChatMessage[] = [];

	constructor() {}

	ngOnInit() {
		ChatService.getTestData().forEach((msg) => this.msgList.push(msg));
	}

	showContent() {
		this.showChat = false;
		this.showDialogs = true;
	}

	sendMessage(message: HTMLInputElement) {
		this.msgList.push(ChatService.messageData(message.value));
		message.value = '';
	}
}
