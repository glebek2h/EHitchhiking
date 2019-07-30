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
	curUser: User = CUR_USER;
	loaderSize: LoaderSize = LoaderSize.Large;
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No users!';
	noDataIconName = 'accessibility';
	loadingDrives = true;
	loadingPassengers = false;
	driversBlacklist: User[];
	passengerBlacklist: User[];

	constructor(public dialogRef: MatDialogRef<BlacklistComponent>, private apiBlacklistService: BlackListApiService) {}

	ngOnInit() {
		console.log(this.apiBlacklistService.getBlockedDrivers({idDr: this.curUser.id}));
		this.apiBlacklistService.getBlockedDrivers({idDr: this.curUser.id}).subscribe((data) => {
			this.driversBlacklist = data;
      console.log('driversBlacklist'+this.driversBlacklist);
			this.loadingDrives = false;
		});
		this.apiBlacklistService.getBlockedPassengers({idPass: this.curUser.id}).subscribe((data) => {
			if (typeof data!==null) {
			  console.log('ky');
        this.passengerBlacklist = data;
      }
			else {
        this.passengerBlacklist = [];
      }
			this.loadingPassengers = false;
		});
	}
	close(): void {
		this.dialogRef.close();
	}

	removePersonFromDriverBlacklist(i) {
		this.apiBlacklistService
			.deleteBlockedDriver({idDr: this.driversBlacklist[i].id, idPass: this.curUser.id})
			.subscribe(() =>
				this.apiBlacklistService.getBlockedDrivers({idDr: this.curUser.id}).subscribe((data) => {
					this.driversBlacklist = data;

					this.loadingDrives = false;
				})
			);
	}

	removePersonFromPassengerBlacklist(i) {
		this.apiBlacklistService
			.deleteBlockedPassenger({idPass: this.passengerBlacklist[i].id, idDr: this.curUser.id})
			.subscribe(() =>
				this.apiBlacklistService.getBlockedPassengers({idPass: this.curUser.id}).subscribe((data) => {
				  this.passengerBlacklist = data;
					this.loadingPassengers = false;
				})
			);
	}
}
