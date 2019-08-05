import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';
import {NoDataSize} from '@shared/enums/no-data-sizes';
import {User} from '@shared/models/user';
import {BlackListApiService} from '@shared/services/api.services/black-list-api.service';
import {UserService} from '@shared/services/user.service';

@Component({
	selector: 'app-blacklist',
	templateUrl: './blacklist.component.html',
	styleUrls: ['./blacklist.component.sass'],
})
export class BlacklistComponent implements OnInit {
	private empId = this.userService.getCurrentUser().id;
	loaderSize: LoaderSize = LoaderSize.Large;
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No users!';
	noDataIconName = 'accessibility';
	loading = true;
	driversBlacklist: User[];
	passengersBlacklist: User[];

	constructor(
		public dialogRef: MatDialogRef<BlacklistComponent>,
		private apiBlacklistService: BlackListApiService,
		private userService: UserService
	) {}

	ngOnInit() {
		this.loadPassengersList();
		this.loadDriversList();
	}
	close(): void {
		this.dialogRef.close();
	}

	loadDriversList(): void {
		this.loading = true;
		this.apiBlacklistService.getDriverBlacklist({empId: this.empId}).then((data) => {
			this.driversBlacklist = data;
			this.loading = false;
		});
	}

	loadPassengersList(): void {
		this.loading = true;
		this.apiBlacklistService.getPassengerBlacklist({empId: this.empId}).then((data) => {
			this.passengersBlacklist = data;
			this.loading = false;
		});
	}

	removePersonFromDriverBlacklist(index): void {
		this.apiBlacklistService
			.deleteBlockedDriver({empId: this.empId, idDel: this.driversBlacklist[index].id})
			.then(() => this.loadDriversList());
	}

	removePersonFromPassengerBlacklist(index): void {
		this.apiBlacklistService
			.deleteBlockedPassenger({idDel: this.passengersBlacklist[index].id, empId: this.empId})
			.then(() => this.loadPassengersList());
	}
}
