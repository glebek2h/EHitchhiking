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
	constructor(public dialogRef: MatDialogRef<BlacklistComponent>) {}

	ngOnInit() {
		this.blacklistUsersArray = BLACKLISTUSERS;
		setTimeout(() => {
			this.loading = false;
		}, 1000);
	}

	return(): void {
		this.dialogRef.close();
	}

	removePerson(item) {
		this.blacklistUsersArray.splice(item, 1);
	}
}
