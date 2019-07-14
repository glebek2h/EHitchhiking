import {Component, OnInit, Input} from '@angular/core';
import {BUTTONS} from './buttons';
import {MatDialog} from '@angular/material';
import {ProfileModalComponent} from '../../modals/profile-modal/profile-modal.component';
import '../../models/user';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
	events: string[] = [];
	opened: boolean;
	buttonsArray = [];
	@Input() user: User;
	constructor(public dialog: MatDialog) {}

	ngOnInit() {
		this.buttonsArray = BUTTONS;
	}

	openProfileDialog(): void {
		this.dialog.open(ProfileModalComponent, {data: {user: this.user}});
	}
}
