import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-pre-loading',
	templateUrl: './pre-loading.component.html',
	styleUrls: ['./pre-loading.component.sass'],
})
export class PreLoadingComponent implements OnInit {
	@Input() isLoading: boolean;
	@Input() size: string;

	constructor() {}

	ngOnInit() {}

	defineSize(size: string) {
		switch (size) {
			case 'md': {
				return 'gooey-md';
				break;
			}
			case 'lg': {
				return 'gooey-lg';
				break;
			}
			case 'sm': {
				return 'gooey-sm';
				break;
			}
			default: {
				return 'gooey-md';
				break;
			}
		}
	}
}
