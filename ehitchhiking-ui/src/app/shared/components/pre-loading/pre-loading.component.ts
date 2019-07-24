import {Component, Input, OnInit} from '@angular/core';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';

@Component({
	selector: 'app-pre-loading',
	templateUrl: './pre-loading.component.html',
	styleUrls: ['./pre-loading.component.sass'],
})
export class PreLoadingComponent implements OnInit {
	@Input() isLoading: boolean;
	@Input() size: LoaderSize = LoaderSize.Middle;

	constructor() {}

	ngOnInit() {}

	defineSize(size: LoaderSize) {
		return `gooey-${size}`;
	}
}
