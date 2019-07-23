import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DialogListService} from './dialog-list.service';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog-list.component.html',
	styleUrls: ['./dialog-list.component.sass'],
})
export class DialogListComponent implements OnInit {
	dialogList = DialogListService.dlgList;
	@Output() chatMessages = new EventEmitter<any>();

	constructor() {}

	ngOnInit() {}

	showChat(index) {
		this.chatMessages.emit(this.dialogList[index].msgList);
	}
}
