import {Component, OnInit} from '@angular/core';
import {BLACKLIST_DRIVER, BLACKLIST_PASSENGER} from './blacklist-users';
import {MatDialogRef} from '@angular/material';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';
import {NoDataSize} from '@shared/enums/no-data-sizes';

@Component({
	selector: 'app-blacklist',
	templateUrl: './blacklist.component.html',
	styleUrls: ['./blacklist.component.sass'],
})
export class BlacklistComponent implements OnInit {
	blacklistDriverArray = [];
	blacklistPassengerArray = [];
	loaderSize: LoaderSize = LoaderSize.Large;
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No users!';
	noDataIconName = 'accessibility';
	loading = true;
	constructor(public dialogRef: MatDialogRef<BlacklistComponent>) {}

	ngOnInit() {
		this.blacklistDriverArray = BLACKLIST_DRIVER;
		this.blacklistPassengerArray = BLACKLIST_PASSENGER;
		setTimeout(() => {
			this.loading = false;
		}, 1000);
	}

	close(): void {
		this.dialogRef.close();
	}

	removePersonFromDriverBlacklist(item) {
		this.blacklistDriverArray.splice(item, 1);
	}

	removePersonFromPassengerBlacklist(item) {
		this.blacklistPassengerArray.splice(item, 1);
	}
}
