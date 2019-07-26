import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';
import {NoDataSize} from '@shared/enums/no-data-sizes';
import {User} from '@shared/models/user';
import {BlackListApiService} from '@shared/api-services/black-list-api.service';
import {CUR_USER} from '@shared/components/blacklist/blacklist-users';

@Component({
	selector: 'app-blacklist',
	templateUrl: './blacklist.component.html',
	styleUrls: ['./blacklist.component.sass'],
	providers: [BlackListApiService],
})
export class BlacklistComponent implements OnInit {
	blacklistDriverArray: User[] = [];
	blacklistPassengerArray: User[] = [];
	curUser: User = CUR_USER;
	loaderSize: LoaderSize = LoaderSize.Large;
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No users!';
	noDataIconName = 'accessibility';
	loadingDrives = true;
	loadingPassengers = true;
	constructor(public dialogRef: MatDialogRef<BlacklistComponent>, private apiBlacklistService: BlackListApiService) {}

	ngOnInit() {
		this.apiBlacklistService.doGetDrivers(this.curUser);
		this.apiBlacklistService.doGetPassengers(this.curUser);
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
		this.apiBlacklistService.doDeleteDriver(item, this.curUser);
	}

	removePersonFromPassengerBlacklist(item) {
		this.apiBlacklistService.doDeletePassengers(item, this.curUser);
	}
}
