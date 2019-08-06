import {DialogListApiService} from './../../../services/api.services/dialog-list.api.service';
import {Dialog} from '@shared/interfaces/dialog-interface';
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
	@Output() onDialogReceiving = new EventEmitter<Dialog>();
	@Output() onDialogInitialization = new EventEmitter<Promise<boolean>>();
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No dialogs!';
	noDataIconName = 'accessibility';

	constructor(private dialogListApiService: DialogListApiService) {}

	ngOnInit() {
		if (this.userId) {
			this.dialogListApiService.initDialog(this.userId).then((dialogList) => {
				this.dialogList = dialogList;
				this.onDialogInitialization.emit(Promise.resolve(DialogListApiService.isDialogListData));
			});
		}
	}

	showChat(index) {
		this.onDialogReceiving.emit(this.dialogList[index]);
	}

	getImage(msgList): string {
		return msgList.length ? msgList[msgList.length - 1].avaSrc : DialogListApiService.defaultImg;
	}

	getText(msgList): string {
		return msgList.length ? msgList[msgList.length - 1].text : '';
	}
}
