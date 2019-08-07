import {ChatApiService} from './../../../services/api.services/chat.api.service';
import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {NoDataSize} from '@shared/enums/no-data-sizes';
import {User} from '@shared/models/user';
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
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No messages!';
	noDataIconName = 'accessibility';
	isLoading = false;
	isDialogInitialized = false;
	currentUser: User;
	currentDialog: Dialog;

	constructor(public dialogRef: MatDialogRef<ChatComponent>, private chatApiService: ChatApiService) {}

	ngOnInit() {
		this.isLoading = true;
		this.currentUser = this.chatApiService.initCurrentUser();
	}

	sendMessage(message: HTMLInputElement) {
		this.chatApiService.sendMessage(message);
	}

	getChat(dialogPromise: Promise<Dialog>) {
		dialogPromise.then((dialog) => {
			console.log(`opening chat: ${dialog.id}`);
			dialog.msgList = dialog.msgList.map((message) => {
				if (message.email === this.currentUser.email) {
					message.isMy = true;
				}
				return message;
			});
			this.chatApiService.setCurrentDialog(dialog);
			this.currentDialog = dialog;
		});
	}

	showContent() {
		this.showChat = !this.showChat;
		this.showDialogs = !this.showDialogs;
	}

	close(): void {
		this.chatApiService.closeConnection();
		this.dialogRef.close();
	}

	dialogsInitialization(dialogPromise: Promise<boolean>) {
		dialogPromise.then((dialogsStatus) => {
			if (!dialogsStatus || this.chatApiService.checkSubscribtion() || !this.currentUser) {
				this.isLoading = false;
				return;
			}
			this.isDialogInitialized = true;
			this.chatApiService.initializeWebSocketConnection().finally(() => {
				this.isLoading = false;
			});
		});
	}
}
