import {Component, Input, OnInit} from '@angular/core';
import {BLACKLISTUSERS} from './blacklist-users';
import {MatDialogRef} from '@angular/material';

@Component({
	selector: 'app-blacklist',
	templateUrl: './blacklist.component.html',
	styleUrls: ['./blacklist.component.sass'],
})
export class BlacklistComponent implements OnInit {
	blacklistUsersArray = [];
	loaderSize = 'lg';
	loader = true;
	constructor(public dialogRef: MatDialogRef<BlacklistComponent>) {}

	ngOnInit() {
		this.blacklistUsersArray = BLACKLISTUSERS;
		setTimeout(() => {
			this.loader = false;
		}, 1000);
	}

	return(): void {
		this.dialogRef.close();
	}

	removePerson(item) {
		this.blacklistUsersArray.splice(item, 1);
	}
}
