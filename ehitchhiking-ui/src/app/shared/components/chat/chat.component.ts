import {Component, OnInit} from '@angular/core';

interface ChatMessage {
	text: string;
	person: string;
	avaSrc: string;
	time?: number;
	isMy: boolean;
}

interface Dialog {
	title: string;
	lastMsg: ChatMessage;
}

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
		[
			{
				text: 'Hello world',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: Date.now(),
				isMy: true,
			},
			{
				text: 'Hello world 2',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: Date.now(),
				isMy: false,
			},
		].forEach((msg) => this.msgList.push(msg));
	}

	showContent() {
		this.showChat = false;
		this.showDialogs = true;
	}

	onInput(message) {
		this.msgList.push({
			text: message,
			person: '',
			avaSrc: 'http://placekitten.com/40/50',
			time: Date.now(),
			isMy: true,
		});
	}

	onSend(message: HTMLInputElement) {
		message.value = '';
	}
}
