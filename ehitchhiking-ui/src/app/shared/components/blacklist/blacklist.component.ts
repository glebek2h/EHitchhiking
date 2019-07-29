import {Component, OnInit} from '@angular/core';
import {BLACKLIST_DRIVERS, BLACKLIST_PASSENGERS} from './blacklist-users';
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
  loadingDrives = true;
  loadingPassengers = true;
	constructor(public dialogRef: MatDialogRef<BlacklistComponent>) {}

	ngOnInit() {
    this.blacklistDriverArray = BLACKLIST_DRIVERS;
    this.blacklistPassengerArray = BLACKLIST_PASSENGERS;
		setTimeout(() => {
      this.loadingDrives = false;
		}, 1000);
    setTimeout(() => {
      this.loadingPassengers = false;
    }, 2000);
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
