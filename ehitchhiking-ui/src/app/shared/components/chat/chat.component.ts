import {Component, OnInit} from '@angular/core';
import {$} from 'protractor';

interface ChatMessage {
	text: string;
	person: string;
	avaSrc: string;
	time?: string;
	isMy: boolean;
}

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.sass'],
})
export class ChatComponent implements OnInit {
	showDialog = true;

	msgList: ChatMessage[] = [];

	constructor() {}

	ngOnInit() {
		[
			{
				text: 'Hello world',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: '11:00',
				isMy: true,
			},
			{
				text: 'Hello world 2',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: '11:01',
				isMy: false,
			},
		].forEach((msg) => this.msgList.push(msg));
	}

	showContent() {
		this.showDialog = false;
	}

	onInput(message) {
		const currentdate = new Date();
		const dataTime = currentdate.getHours() + ':' + currentdate.getMinutes();
		this.msgList.push({
			text: message,
			person: '',
			avaSrc: 'http://placekitten.com/40/50',
			time: dataTime,
			isMy: true,
		});
	}
}
