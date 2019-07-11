import {Component, OnInit} from '@angular/core';
import {BUTTONS} from './buttons';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
	events: string[] = [];
	opened: boolean;
	buttonsArray = [];
	constructor() {}

	ngOnInit() {
		this.buttonsArray = BUTTONS;
	}
}
