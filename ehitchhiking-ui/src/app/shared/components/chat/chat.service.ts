import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ChatService {
	static getTestData() {
		return [
			{
				text: 'Hello world',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: Date.now(),
				isMy: true,
			},
			{
				text: 'Hello world 2',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: Date.now(),
				isMy: false,
			},
		];
	}
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
