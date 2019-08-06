import {Dialog} from '@shared/interfaces/dialog-interface';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

@Injectable()
export class ChatApiService {
	constructor(private apiService: ApiService) {}

	getDialogList(userId: string): Promise<Dialog[]> {
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
}
