import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Dialog} from '@shared/interfaces/dialog-interface';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ChatMessage} from '@shared/interfaces/chat-interface';

@Injectable()
export class DialogListApiService {
	static isDialogListData = false;
	static readonly defaultImg = 'assets/images/profile.jpg';

	constructor(private apiService: ApiService) {}

	initDialog(userId: string): Promise<Dialog[]> {
		return this.getDialogList(userId).then((data) => {
			DialogListApiService.isDialogListData = !!data.length;
			return this.parseResponse(data);
		});
	}

	private getDialogList(userId: string): Promise<Dialog[]> {
		return this.apiService
			.doGet(URL_REGISTRY.CHAT.GET_DIALOGS, false, {id: +userId}, false)
			.then((response) => {
				if (!response) {
					return [];
				}
				return response;
			})
			.catch(() => []);
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
				avaSrc: DialogListApiService.defaultImg,
			};
		});
	}
}
