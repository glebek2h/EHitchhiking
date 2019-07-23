import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DialogService} from './dialog.service';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.sass'],
})
export class DialogListComponent implements OnInit {
	dialogList = DialogService.dlgList;
	@Output() chatMessages = new EventEmitter<any>();

	constructor() {}

	ngOnInit() {}

	showChat(index) {
		this.chatMessages.emit(this.dialogList[index].msgList);
	}
}
