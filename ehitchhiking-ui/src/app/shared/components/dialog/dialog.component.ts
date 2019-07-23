import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.sass'],
})
export class DialogComponent implements OnInit {
	constructor() {}

	dlgList: Dialog[] = [
		{
			title: 'Secret chat',
			lastMsg: {
				text: 'Hello world 2',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: Date.now(),
				isMy: false,
			},
		},
		{
			title: 'Secret chat',
			lastMsg: {
				text: 'Hello world 2',
				person: 'not me',
				avaSrc: 'http://placekitten.com/40/50',
				time: Date.now(),
				isMy: false,
			},
		},
	];

	ngOnInit() {}
}
