import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ChatService {
	static messageData(message: string) {
		return {
			text: message,
			person: '',
			avaSrc: 'http://placekitten.com/40/50',
			time: Date.now(),
			isMy: true,
		};
	}
	constructor() {}
}
