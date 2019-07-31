import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {StarClickMeta} from '../rating/starClickMeta';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Pass,Driver} from "@shared/components/rate-passengers-modal/user";
import {UserState} from "@shared/enums/UserState";
import {RatePassengersApiService} from "@shared/services/api.services/rate-passengers-api.service";
import {User} from "@shared/models/user";
import {LoaderSize} from "@shared/enums/pre-loader-sizes";


@Component({
	selector: 'rate-passengers-modal',
	templateUrl: './rate-passengers-modal.component.html',
	styleUrls: ['./rate-passengers-modal.component.sass'],
})
export class RatePassengersModalComponent implements OnInit{
  users: User[] = [];
  UserState = UserState;
  idTripDriver=12;
  idTripPassenger=4;
  loading =true;
  loaderSize: LoaderSize = LoaderSize.Large;

  constructor(public dialogRef: MatDialogRef<RatePassengersModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private apiRatePassengersService: RatePassengersApiService) {
  }

  ngOnInit(): void {
    if (this.data.dataKey === UserState.Passenger) {
      this.loadDriversList();
    }
    else {
      this.loadPassengersList();
    }
  }

  loadPassengersList(){
    this.loading = true;
    this.apiRatePassengersService.getTripPassengers(this.idTripPassenger).subscribe((data) => {
      this.users = data;
      this.loading = false;
    });
  }

  loadDriversList(): void {
    this.loading = true;
    this.apiRatePassengersService.getTripDriver(this.idTripDriver).subscribe((data) => {
      this.users = data;
      this.loading = false;
    });
  }

  rateUser(clickObj: StarClickMeta): void {
    if (this.data.dataKey === UserState.Passenger) {
      this.users.forEach((i: User) => {
        i.id === clickObj.itemId ? i.rate = clickObj.rating : '';
        return i;
      })
    }
    else {
      this.users.forEach((i: User) => {
        i.id === clickObj.itemId ? i.rate = clickObj.rating : '';
        return i;
      })
    }
	}

	exitTrip(): void {
    const drivers = [];
    this.users.forEach((user) => {
      drivers.push({
        idDriver: user.id,
        rate: user.rate,
      });
    });
    const pass = [];
    this.users.forEach((user) => {
      pass.push({
        idPass: user.id,
        rate: user.rate,
      });
    });
    if (this.data.dataKey === UserState.Passenger){
      this.apiRatePassengersService.addRateDriver(drivers);
    }
    else{
      this.apiRatePassengersService.addRatePassenger(pass);
    }
		this.dialogRef.close();
	}

	trackById(index, item) {
		return item.id;
	}

  addToBlacklist(i) {
    console.log(this.data);
    //  this.users[i].isAddedToBlackList = !this.users[i].isAddedToBlackList;
  }

  exit() {
    this.dialogRef.close();
  }
}
