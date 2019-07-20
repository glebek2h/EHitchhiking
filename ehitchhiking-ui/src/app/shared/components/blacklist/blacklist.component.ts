import {Component, OnInit} from '@angular/core';
import {BLACKLISTUSERS} from './blacklist-users';
import {MatDialogRef} from '@angular/material';
import {LoaderSize} from '../../enums/pre-loader-sizes';
import {NoDataSize} from '../../enums/no-data-sizes';

@Component({
	selector: 'app-blacklist',
	templateUrl: './blacklist.component.html',
	styleUrls: ['./blacklist.component.sass'],
})
export class BlacklistComponent implements OnInit {
	blacklistUsersArray = [];
	loaderSize: LoaderSize = LoaderSize.Large;
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'kyky';
	noDataIconName = 'accessibility';
	loading = true;
	empty = false;
	constructor(public dialogRef: MatDialogRef<BlacklistComponent>) {}

	ngOnInit() {
		this.blacklistUsersArray = BLACKLISTUSERS;
		this.isEmpty();
		setTimeout(() => {
			this.loading = false;
		}, 1000);
	}

	close(): void {
		this.dialogRef.close();
	}

	isEmpty() {
		if (!this.blacklistUsersArray.length) return (this.empty = true);
	}

	removePerson(item) {
		this.blacklistUsersArray.splice(item, 1);
		this.isEmpty();
	}
}
