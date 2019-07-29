import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {StarClickMeta} from '../rating/starClickMeta';
import {MAT_DIALOG_DATA} from '@angular/material';
import {User} from "@shared/components/rate-passengers-modal/user";
import {UserState} from "@shared/enums/UserState";

@Component({
	selector: 'rate-passengers-modal',
	templateUrl: './rate-passengers-modal.component.html',
	styleUrls: ['./rate-passengers-modal.component.sass'],
})
export class RatePassengersModalComponent {
	passengers: User[] = [
    {id: 0, name: 'Ivan', rating: 0, isAddedToBlackList: false},
    {id: 1, name: 'Egor', rating: 0, isAddedToBlackList: false},
    {id: 2, name: 'Semen', rating: 0, isAddedToBlackList: false},
    {id: 3, name: 'Fedor', rating: 0, isAddedToBlackList: false},
	];
  driver: User = {id: 0, name: 'Ivan', rating: 0, isAddedToBlackList: false};
  UserState = UserState;

  constructor(public dialogRef: MatDialogRef<RatePassengersModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

	rateUser(clickObj: StarClickMeta): void {
		const passenger = this.passengers.find((i: User) => i.id === clickObj.itemId);
		if (!!passenger) {
			passenger.rating = clickObj.rating;
		}
	}

  rateDriver(clickObj: StarClickMeta) {
    if (!!this.driver) {
      this.driver.rating = clickObj.rating;
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
    this.passengers[i].isAddedToBlackList = !this.passengers[i].isAddedToBlackList;
  }

  addDriverToBlacklist() {
    this.driver.isAddedToBlackList = !this.driver.isAddedToBlackList;
  }

  exit() {
    this.dialogRef.close();
  }
}
