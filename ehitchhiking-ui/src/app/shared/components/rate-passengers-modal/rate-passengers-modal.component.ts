import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {StarClickMeta} from '../rating/starClickMeta';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserState} from '@shared/enums/UserState';
import {RatePassengersApiService} from '@shared/services/api.services/rate-passengers-api.service';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';
import {BlacklistedUser} from '@shared/components/rate-passengers-modal/user';

@Component({
	selector: 'rate-passengers-modal',
	templateUrl: './rate-passengers-modal.component.html',
	styleUrls: ['./rate-passengers-modal.component.sass'],
})
export class RatePassengersModalComponent implements OnInit {
  users: RatedUser[] = [];
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
    switch(this.data.dataKey) {
      case UserState.Passenger:
        this.loadDriversList();
        break;
      case UserState.Driver:
        this.loadPassengersList();
        break;
      default:
        break;
    }
  }

  loadPassengersList():void {
    this.loading = true;
    this.apiRatePassengersService.getTripPassengers(this.idTripPassenger).then((data: RatedUser[]) => {
      this.users = data;
      console.log(data);
    }).finally(() => this.loading = false);
  }

  loadDriversList(): void {
    this.loading = true;
    this.apiRatePassengersService.getTripDriver(this.idTripDriver).then((data: RatedUser[]) => {
      this.users = data;
      console.log(data);
    }).finally(() => this.loading = false);
  }

  rateUser(clickObj: StarClickMeta): void {
    this.users.forEach((i: RatedUser) => {
      i.id === clickObj.itemId ? (i.rate = clickObj.rating) : '';
      return i;
    });
  }

  exitTrip(): void {
    const users = [];
    const blockedUsers= [];
    this.users.forEach((user) => {
      users.push({
        id: user.id,
        rate: user.rate,
      });
      blockedUsers.push({
        id: user.id,
        isBlocked: user.isBlocked,
      });
    });
    if (this.data.dataKey === UserState.Passenger) {
      this.apiRatePassengersService.addRateDriver(users);
      this.apiRatePassengersService.addBlacklistDriver(this.idTripDriver, blockedUsers)
        .then(() => this.dialogRef.close());
    } else {
      this.apiRatePassengersService.addRatePassenger(users);
      this.apiRatePassengersService.addBlacklistPass(this.idTripPassenger, blockedUsers)
        .then(() => this.dialogRef.close());
    }
  }

  trackById(index, item) {
    return item.id;
  }

  addToBlacklist(i) {
    this.users[i].isBlocked = !this.users[i].isBlocked;
  }

  exit() {
    this.dialogRef.close();
  }
}
