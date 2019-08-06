import {map} from 'rxjs/operators';
import {Dialog} from '@shared/interfaces/dialog-interface';
import {ChatApiService} from './../../../services/api.services/chat.api.service';
import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {NoDataSize} from '@shared/enums/no-data-sizes';
import {ChatMessage} from '@shared/interfaces/chat-interface';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog-list.component.html',
	styleUrls: ['./dialog-list.component.sass'],
})
export class DialogListComponent implements OnInit {
	dialogList: Dialog[] = [];
	@Input() userId: string;
	@Output() dialog = new EventEmitter<Dialog>();
	@Output() onDialogInitialization = new EventEmitter<Promise<boolean>>();
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No dialogs!';
	noDataIconName = 'accessibility';
	defaultImg = 'assets/images/profile.jpg';

	constructor(private chatApiService: ChatApiService) {}

	ngOnInit() {
		if (this.userId) {
			this.chatApiService.getDialogList(this.userId).then((data) => {
				this.onDialogInitialization.emit(Promise.resolve(!!data.length));
				this.dialogList = this.parseResponse(data);
			});
		}
	}

	private parseResponse(data: any): Dialog[] {
		return data.map((chat) => {
			return {
				id: chat.id,
				startPoint: chat.startPoint,
				endPoint: chat.endPoint,
				msgList: this.parseMessages(chat.chatMessage),
			};
		});
	}

	private parseMessages(messages: any): ChatMessage[] {
		return messages.map((message) => {
			return {
				text: message.content,
				person: message.name,
				email: message.email,
				time: message.date,
				avaSrc: this.defaultImg,
			};
		});
	}

	showChat(index) {
		this.dialog.emit(this.dialogList[index]);
	}

	getImage(msgList): string {
		return msgList.length ? msgList[msgList.length - 1].avaSrc : this.defaultImg;
	}

	getText(msgList): string {
		return msgList.length ? msgList[msgList.length - 1].text : '';
	}
}
