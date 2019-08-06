import {ChatMessage} from '@shared/interfaces/chat-interface';
import {ChatEvents} from '@shared/enums/chat-events.enum';
import {UserService} from '@shared/services/user.service';
import {Component, OnInit, ɵConsole} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {NoDataSize} from '@shared/enums/no-data-sizes';
import SockJS from 'sockjs-client';
import {Stomp, CompatClient} from '@stomp/stompjs';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {User} from '@shared/models/user';
import {NotificationService} from '@shared/services/notification.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.sass'],
})
export class ChatComponent implements OnInit {
	readonly MAX_MESSAGE_LENGTH = 256;
	showChat = false;
	showDialogs = true;
	msgList: ChatMessage[] = [];
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No messages!';
	noDataIconName = 'accessibility';
	loading = false;
	stompClient: CompatClient;
	currentUser: User;

	constructor(
		public dialogRef: MatDialogRef<ChatComponent>,
		private userService: UserService,
		private notificationService: NotificationService
	) {}

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser();
	}

	initializeWebSocketConnection(): void {
		const webSocket = new SockJS(URL_REGISTRY.CHAT.INIT);
		this.stompClient = Stomp.over(webSocket);
		this.stompClient.connect({}, this.onConnected.bind(this), this.onError.bind(this));
	}

	private onConnected() {
		this.stompClient.subscribe(URL_REGISTRY.CHAT.CONNECT, this.onMessageReceived.bind(this));
		this.stompClient.send(
			URL_REGISTRY.CHAT.ADD_USER,
			{},
			JSON.stringify({sender: this.currentUser.email, type: ChatEvents.Join})
		);
	}

	private onError() {
		this.notificationService.showErrorNotification(
			'Could not connect to WebSocket server. Please refresh this page to try again!'
		);
	}

	private onMessageReceived(response: any) {
		console.log(response);
		const {type, sender, content, date} = response.body || response;
		if (type === ChatEvents.Join) {
			this.notificationService.showInfoNotification(`${sender} has joined!`);
		}
		if (type === ChatEvents.Leave) {
			this.notificationService.showInfoNotification(`${sender} has left!`);
		} else {
			this.msgList.push(this.getMessageData(sender, content, date));
		}
	}

	private getMessageData(sender: string, content: string, date: number): ChatMessage {
		return {
			text: content,
			person: sender,
			avaSrc: '',
			time: date,
			isMy: this.currentUser.email === sender,
		};
	}

	sendMessage(message: HTMLInputElement) {
		const messageRequest = {
			sender: this.currentUser.email,
			content: message.value.trim(),
			type: ChatEvents.Chat,
		};
		this.stompClient.send(URL_REGISTRY.CHAT.SEND_MESSAGE, {}, JSON.stringify(messageRequest));
		message.value = '';
	}

	getChat(chatInfo: any) {
		if (this.currentUser) {
			this.initializeWebSocketConnection();
		}
		this.msgList = chatInfo;
	}

	showContent() {
		this.showChat = !this.showChat;
		this.showDialogs = !this.showDialogs;
	}

	close(): void {
		this.dialogRef.close();
	}
}
