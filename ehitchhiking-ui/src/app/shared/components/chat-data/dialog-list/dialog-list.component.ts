import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DialogListService} from './dialog-list.service';
import {NoDataSize} from '@shared/enums/no-data-sizes';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog-list.component.html',
	styleUrls: ['./dialog-list.component.sass'],
})
export class DialogListComponent implements OnInit {
	dialogList = DialogListService.dlgList;
	@Output() chatMessages = new EventEmitter<ChatMessage[]>();
  noDataSize: NoDataSize = NoDataSize.Small;
  noDataMessage = 'No dialogs!';
  noDataIconName = 'accessibility';
  loading = false;
  defaultImg = 'assets/images/profile.jpg';

	constructor() {}

	ngOnInit() {}

	showChat(index) {
		this.chatMessages.emit(this.dialogList[index].msgList);
	}

  getImage(msgList): string {
    return msgList.length ? msgList[msgList.length - 1].avaSrc : this.defaultImg;
  }

  getText(msgList): string {
    return msgList.length ? msgList[msgList.length - 1].text : '';
  }
}
