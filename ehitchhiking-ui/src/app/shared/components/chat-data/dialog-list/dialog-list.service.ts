import {ChatApiService} from './../../../services/api.services/chat.api.service';
import {Injectable} from '@angular/core';
import {Dialog} from '@shared/interfaces/dialog-interface';

@Injectable()
export class DialogListService {
	constructor() {}

	static dlgList: Dialog[] = [
		{
			id: 25,
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
			id: 25,
			title: 'Secret chat 2',
			msgList: [],
		},
		{
			id: 25,
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
			id: 25,
			title: 'Secret chat 4',
			msgList: [],
		},
	];

	static initDialogList(userId: string) {}
}
