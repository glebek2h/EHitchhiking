import {Component, Input} from '@angular/core';
import {NoDataSize} from '@shared/enums/no-data-sizes';

@Component({
	selector: 'app-no-data',
	templateUrl: './no-data.component.html',
	styleUrls: ['./no-data.component.sass'],
})
export class NoDataComponent {
	@Input() isEmpty: boolean;
	@Input() size: NoDataSize = NoDataSize.Middle;
	@Input() message;
	@Input() icon;
	defaultIcon = 'block';
	defaultMessage = 'No data!';

	constructor() {}

	defineSize(size: NoDataSize) {
		return `no-data-block-${size}`;
	}
}
