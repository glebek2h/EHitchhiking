import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {StarClickMeta} from '../rating/starClickMeta';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserState} from '@shared/enums/UserState';
import {RatePassengersApiService} from '@shared/services/api.services/rate-passengers-api.service';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';
import {BlacklistUser} from '@shared/components/rate-passengers-modal/user';

@Component({
	selector: 'rate-passengers-modal',
	templateUrl: './rate-passengers-modal.component.html',
	styleUrls: ['./rate-passengers-modal.component.sass'],
})
export class RatePassengersModalComponent implements OnInit {
	users: RateUser[] = [];
	UserState = UserState;
	idTripDriver = 12;
	idTripPassenger = 4;
	loading = true;
	loaderSize: LoaderSize = LoaderSize.Large;
	constructor(
		public dialogRef: MatDialogRef<RatePassengersModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private apiRatePassengersService: RatePassengersApiService
	) {}

	ngOnInit(): void {
		if (this.data.dataKey === UserState.Passenger) {
			this.loadDriversList();
		} else {
			this.loadPassengersList();
		}
	}

	loadPassengersList() {
		this.loading = true;
		this.apiRatePassengersService.getTripPassengers(this.idTripPassenger).then((data) => {
			this.users = data;
			this.loading = false;
		});
	}

	loadDriversList(): void {
		this.loading = true;
		this.apiRatePassengersService.getTripDriver(this.idTripDriver).then((data) => {
			this.users = data;
			this.loading = false;
		});
	}

	rateUser(clickObj: StarClickMeta): void {
		if (this.data.dataKey === UserState.Passenger) {
			this.users.forEach((i: RateUser) => {
				i.id === clickObj.itemId ? (i.rate = clickObj.rating) : '';
				return i;
			});
		} else {
			this.users.forEach((i: RateUser) => {
				i.id === clickObj.itemId ? (i.rate = clickObj.rating) : '';
				return i;
			});
		}
	}

	exitTrip(): void {
		const drivers = [];
		const pass = [];
		const blockedPass = [];
		const blockedDrivers = [];
		this.users.forEach((user) => {
			drivers.push({
				idDriver: user.id,
				rate: user.rate,
			});
			pass.push({
				idPass: user.id,
				rate: user.rate,
			});
			blockedDrivers.push({
				id: user.id,
				isBlocked: user.isBlocked,
			});
			blockedPass.push({
				id: user.id,
				isBlocked: user.isBlocked,
			});
		});
		if (this.data.dataKey === UserState.Passenger) {
			this.apiRatePassengersService.addRateDriver(drivers);
			this.apiRatePassengersService.addBlacklistDriver(this.idTripDriver, blockedPass);
		} else {
			this.apiRatePassengersService.addRatePassenger(pass);
			this.apiRatePassengersService.addBlacklistPass(this.idTripPassenger, blockedDrivers);
		}
		this.dialogRef.close();
	}

	trackById(index, item) {
		return item.id;
	}

	addToBlacklist(i) {
		if (this.data.dataKey === UserState.Passenger) {
			this.users[i].isBlocked = !this.users[i].isBlocked;
		} else {
			this.users[i].isBlocked = !this.users[i].isBlocked;
		}
	}

	exit() {
		this.dialogRef.close();
	}
}
