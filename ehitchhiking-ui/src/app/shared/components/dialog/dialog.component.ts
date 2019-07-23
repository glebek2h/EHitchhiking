import {Component, OnInit} from '@angular/core';
import {DialogService} from './dialog.service';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.sass'],
})
export class DialogListComponent implements OnInit {
	dialogList = DialogService.dlgList;

	constructor() {}

	ngOnInit() {}
}
