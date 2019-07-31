import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {StarClickMeta} from '../rating/starClickMeta';
import {MAT_DIALOG_DATA} from '@angular/material';
import {User} from "@shared/components/rate-passengers-modal/user";
import {UserState} from "@shared/enums/UserState";
import {RatePassengersApiService} from "@shared/services/api.services/rate-passengers-api.service";


@Component({
	selector: 'rate-passengers-modal',
	templateUrl: './rate-passengers-modal.component.html',
	styleUrls: ['./rate-passengers-modal.component.sass'],
})
export class RatePassengersModalComponent implements OnInit{
  users: User[] = [];
  UserState = UserState;

  constructor(public dialogRef: MatDialogRef<RatePassengersModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private apiRatePassengersService: RatePassengersApiService) {
  }

  ngOnInit(): void {
    // here should be just GET 'info' about trip
    if (this.data.dataKey === UserState.Driver){
      this.users = [
        {id: 14, name: 'Ivan', rating: 0, isAddedToBlackList: false},
        {id: 13, name: 'Egor', rating: 0, isAddedToBlackList: false},
        {id: 15, name: 'Semen', rating: 0, isAddedToBlackList: false},
        {id: 16, name: 'Fedor', rating: 0, isAddedToBlackList: false},
      ];
    }
    else{
      this.users = [{id: 8, name: 'Ivan', rating: 0, isAddedToBlackList: false}];
    }


  }

  rateUser(clickObj: StarClickMeta): void {
    const user = this.users.find((i: User) => i.id === clickObj.itemId);
    if (!!user) {
      user.rating = clickObj.rating;
    }
    if (this.data.dataKey === UserState.Driver) {
		  this.apiRatePassengersService.addRatePassenger(user);
    }
    else {
      this.apiRatePassengersService.addRateDriver(user);
    }
	}

	exitTrip(): void {
		this.dialogRef.close();
	}

	trackById(index, item) {
		return item.id;
	}

  addToBlacklist(i) {
    console.log(this.data);
    this.users[i].isAddedToBlackList = !this.users[i].isAddedToBlackList;
  }


  exit() {
    this.dialogRef.close();
  }
}
