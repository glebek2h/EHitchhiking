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
	dlgList: Dialog[] = [
		{
			title: 'Secret chat',
			lastMsg: {
				text: 'Hello world 2',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: Date.now(),
				isMy: false,
			},
		},
		{
			title: 'Secret chat',
			lastMsg: {
				text: 'Hello world 2',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: Date.now(),
				isMy: false,
			},
		},
	];

	constructor() {}

	ngOnInit() {
		ChatService.getTestData().forEach((msg) => this.msgList.push(msg));
	}

	showContent() {
		this.showChat = false;
		this.showDialogs = true;
	}

	onInput(message) {
		this.msgList.push(ChatService.messageData(message));
	}

	onSend(message: HTMLInputElement) {
		message.value = '';
	}
}
