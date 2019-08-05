import {Component, OnInit} from '@angular/core';
import {ChatService} from './chat.service';
import {MatDialogRef} from '@angular/material';
import {NoDataSize} from '@shared/enums/no-data-sizes';
import SockJS from 'sockjs-client';
import {Stomp, CompatClient} from '@stomp/stompjs';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

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
	stompClient: CompatClient;

	constructor(public dialogRef: MatDialogRef<ChatComponent>) {}

	ngOnInit() {
		this.initializeWebSocketConnection();
	}

	initializeWebSocketConnection(): void {
		const webSocket = new SockJS(URL_REGISTRY.CHAT.INIT);
		this.stompClient = Stomp.over(webSocket);
		const stompClient = this.stompClient;
		this.stompClient.connect(
			{},
			() => {
				stompClient.subscribe('/chat', (response) => {
					console.log(response);
					const {body: data} = response;
					const message = data.match(/(?<date>[0-9:]+)-(?<message>.*)/).groups.message;
					this.msgList.push(ChatService.messageData(message));
				});
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getChat(chatInfo: any) {
		this.msgList = chatInfo;
	}

	showContent() {
		this.showChat = !this.showChat;
		this.showDialogs = !this.showDialogs;
	}

	sendMessage(message: HTMLInputElement) {
		this.stompClient.send('/app/send/message', {}, message.value);
		message.value = '';
	}

	close(): void {
		this.dialogRef.close();
	}
}
