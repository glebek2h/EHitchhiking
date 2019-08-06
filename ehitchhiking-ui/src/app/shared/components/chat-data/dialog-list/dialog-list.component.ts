import {Dialog} from '@shared/interfaces/dialog-interface';
import {ChatApiService} from './../../../services/api.services/chat.api.service';
import {ChatMessage} from '@shared/interfaces/chat-interface';
import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {NoDataSize} from '@shared/enums/no-data-sizes';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog-list.component.html',
	styleUrls: ['./dialog-list.component.sass'],
})
export class DialogListComponent implements OnInit {
	dialogList: Dialog[] = [];
	@Input() userId: string;
	@Output() dialog = new EventEmitter<Dialog>();
	@Output() onDialogInitialization = new EventEmitter<Promise<boolean>>();
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No dialogs!';
	noDataIconName = 'accessibility';
	defaultImg = 'assets/images/profile.jpg';

	constructor(private chatApiService: ChatApiService) {}

	ngOnInit() {
		if (this.userId) {
			this.chatApiService.getDialogList(this.userId).then((data) => {
				this.onDialogInitialization.emit(Promise.resolve(!!data.length));
				this.dialogList = data.map((curId) => {
					return {id: curId, title: curId, msgList: []};
				});
			});
		}
	}

	showChat(index) {
		this.dialog.emit(this.dialogList[index]);
	}

	getImage(msgList): string {
		return msgList.length ? msgList[msgList.length - 1].avaSrc : this.defaultImg;
	}

	getText(msgList): string {
		return msgList.length ? msgList[msgList.length - 1].text : '';
	}
}
