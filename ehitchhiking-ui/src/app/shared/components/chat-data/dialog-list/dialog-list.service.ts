import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DialogListService {
	constructor() {}

	static dlgList: Dialog[] = [
		{
			title: 'Secret chat 1',
			msgList: [
				{
					text: 'Hello world 2shgdfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
					person: 'not me',
					avaSrc: 'http://placekitten.com/40/50',
					time: Date.now(),
					isMy: false,
				},
			],
		},
		{
			title: 'Secret chat 2',
			msgList: [],
		},
		{
			title: 'Secret chat 3',
			msgList: [
				{
					text: 'Hello world 2shgdfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
					person: 'not me',
					avaSrc: 'http://placekitten.com/40/50',
					time: Date.now(),
					isMy: false,
				},
				{
					text:
						'Здесь уже чуть более интересная реализация — добавляется фон для заголовка в виде сплошной заливки и картинки. ',
					person: 'not me',
					avaSrc: 'http://placekitten.com/40/50',
					time: Date.now(),
					isMy: false,
				},
			],
		},
		{
			title: 'Secret chat 4',
			msgList: [],
		},
	];
}
