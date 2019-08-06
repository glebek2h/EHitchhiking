import {ChatMessage} from '@shared/interfaces/chat-interface';
import {ChatEvents} from '@shared/enums/chat-events.enum';
import {UserService} from '@shared/services/user.service';
import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {NoDataSize} from '@shared/enums/no-data-sizes';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {User} from '@shared/models/user';
import {NotificationService} from '@shared/services/notification.service';
import {StompService} from 'ng2-stomp-service';
import {Dialog} from '@shared/interfaces/dialog-interface';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.sass'],
})
export class ChatComponent implements OnInit {
	readonly MAX_MESSAGE_LENGTH = 256;
	showChat = false;
	showDialogs = true;
	currentDialog: Dialog;
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No messages!';
	noDataIconName = 'accessibility';
	isLoading = false;
	currentUser: User;
	subscription = null;

	constructor(
		public dialogRef: MatDialogRef<ChatComponent>,
		private userService: UserService,
		private notificationService: NotificationService,
		private stompService: StompService
	) {
		this.stompService.configure({
			host: '/api/socket',
			queue: {init: false},
		});
	}

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser();
	}

	initializeWebSocketConnection(): Promise<any> {
		this.isLoading = true;
		return this.stompService
			.startConnect()
			.then(() => {
				this.stompService.done('init');
				this.subscription = this.stompService.subscribe(
					URL_REGISTRY.CHAT.CONNECT,
					this.onMessageReceived.bind(this)
				);
				this.stompService.send(URL_REGISTRY.CHAT.SEND_MESSAGE, {
					sender: this.currentUser.email,
					type: ChatEvents.Join,
				});
			})
			.catch(this.onError.bind(this))
			.finally(() => {
				this.isLoading = false;
			});
	}

	private onError() {
		this.notificationService.showErrorNotification(
			'Could not connect to WebSocket server. Please refresh this page to try again!'
		);
	}

	private onMessageReceived(response: any) {
		console.log(response);
		const {type, sender, content, date} = response;
		if (type === ChatEvents.Chat) {
			this.currentDialog.msgList.push(this.getMessageData(sender, content, date));
		}
	}

	private getMessageData(sender: string, content: string, date: number): ChatMessage {
		return {
			text: content,
			person: sender,
			email: this.currentUser.email,
			avaSrc: 'http://mtdata.ru/u28/photoC908/20046445797-0/original.jpeg',
			time: Date.now(),
			isMy: this.currentUser.email === sender,
		};
	}

	sendMessage(message: HTMLInputElement) {
		const messageRequest = {
			sender: this.currentUser.email,
			content: message.value.trim(),
			id: this.currentDialog.id,
			type: ChatEvents.Chat,
		};
		this.stompService.send(URL_REGISTRY.CHAT.SEND_MESSAGE, messageRequest);
		message.value = '';
	}

	getChat(dialog: Dialog) {
		dialog.msgList = dialog.msgList.map((message) => {
			if (message.email === this.currentUser.email) {
				message.isMy = true;
			}
			return message;
		});
		this.currentDialog = dialog;
	}

	showContent() {
		this.showChat = !this.showChat;
		this.showDialogs = !this.showDialogs;
	}

	close(): void {
		this.subscription.unsubscribe();
		this.stompService.disconnect();
		this.dialogRef.close();
	}

	dialogsInitialization(dialogPromise: Promise<boolean>) {
		dialogPromise.then((dialogsStatus) => {
			if (!dialogsStatus || this.subscription || !this.currentUser) {
				return;
			}
			this.initializeWebSocketConnection();
		});
	}
}
