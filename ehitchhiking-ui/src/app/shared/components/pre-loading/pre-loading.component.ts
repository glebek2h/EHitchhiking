import {Component, Input, OnInit} from '@angular/core';
import {loaderSize} from '../../enums/pre-loader-sizes';

@Component({
	selector: 'app-pre-loading',
	templateUrl: './pre-loading.component.html',
	styleUrls: ['./pre-loading.component.sass'],
})
export class PreLoadingComponent implements OnInit {
	@Input() isLoading: boolean;
	@Input() size: string = loaderSize.middle;

	constructor() {}

	ngOnInit() {}

	defineSize(size: string) {
	  return  `gooey-${size}`;
	}
}
