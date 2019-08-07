import {Dialog} from '@shared/interfaces/dialog-interface';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {NotificationService} from '../notification.service';
import {StompService} from 'ng2-stomp-service';
import {User} from '@shared/models/user';
import {UserService} from '../user.service';
import {ChatMessage} from '@shared/interfaces/chat-interface';
import {ChatEvents} from '@shared/enums/chat-events.enum';
import {DialogListApiService} from './dialog-list.api.service';

@Injectable()
export class ChatApiService {
	currentDialog: Dialog;
	currentUser: User;
	subscription = null;

	constructor(
		private notificationService: NotificationService,
		private stompService: StompService,
		private userService: UserService
	) {}

	initCurrentUser(): User {
		this.currentUser = this.userService.getCurrentUser();
		return this.currentUser;
	}

	initializeWebSocketConnection(): Promise<boolean> {
		this.stompService.configure({
			host: '/api/socket',
			queue: {init: false},
		});

		return this.stompService
			.startConnect()
			.then(() => {
				this.stompService.done('init');
				this.subscription = this.stompService.subscribe(
					URL_REGISTRY.CHAT.CONNECT,
					this.onMessageReceived.bind(this)
				);
				this.stompService.send(URL_REGISTRY.CHAT.ADD_USER, {
					sender: this.currentUser.email,
					type: ChatEvents.Join,
				});
				return true;
			})
			.catch(() => {
				this.onError.bind(this);
				return false;
			});
	}

	setCurrentDialog(newDialog: Dialog) {
		this.currentDialog = newDialog;
	}

	closeConnection() {
		if (this.subscription) {
			this.subscription.unsubscribe();
			this.stompService.disconnect();
		}
	}

	checkSubscribtion(): boolean {
		return !!this.subscription;
	}

	private onMessageReceived(response: any) {
		const {type, chatId} = response;
		console.log(chatId);
		if (type === ChatEvents.Chat && chatId === this.currentDialog.id) {
			this.currentDialog.msgList.push(this.getMessageData(response));
		}
	}

	private getMessageData(response: any): ChatMessage {
		const {email, name, content, date} = response;
		return {
			text: content,
			person: name,
			email: email,
			avaSrc: DialogListApiService.defaultImg,
			time: date,
			isMy: this.currentUser.email === email,
		};
	}

	private onError() {
		this.notificationService.showErrorNotification(
			'Could not connect to WebSocket server. Please refresh this page to try again!'
		);
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
}
