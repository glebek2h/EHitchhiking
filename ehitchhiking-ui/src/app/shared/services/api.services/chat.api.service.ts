import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import {URL_REGISTRY} from './../../constants/urlRegistry';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class ChatApiService {
	private stompClient;

	constructor() {}

	initializeWebSocketConnection(): Observable<any> {
		const webSocket = new SockJS(URL_REGISTRY.CHAT.INIT);
		this.stompClient = Stomp.over(webSocket);
		let stompClient = this.stompClient;
		return this.stompClient.connect({}, () => {
			stompClient.subscribe('/chat', (message) => {
				const {body: data} = message;
				console.log(data);
				return data;
			});
		});
	}

	sendMessage(message) {
		this.stompClient.send('/app/send/message', {}, message);
	}
}
