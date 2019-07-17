import {Component, Input, OnInit} from '@angular/core';
import {NoDataSize} from '../../enums/no-data-sizes';

@Component({
	selector: 'app-no-data',
	templateUrl: './no-data.component.html',
	styleUrls: ['./no-data.component.sass'],
})
export class NoDataComponent implements OnInit {
	@Input() size: NoDataSize = NoDataSize.Middle;
	@Input() message;
	@Input() icon;

	constructor() {}

	ngOnInit() {}

	defineSize(size: NoDataSize) {
		return `no-data-block-${size}`;
	}

	defineMessage() {
		if (!this.message) return 'No data!';
		else return this.message;
	}

	defineIcon() {
		if (!this.icon) return 'block';
		else return this.icon;
	}
}
