import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { Passenger } from "./passenger";
import { StarClickMeta } from "../rating/starClickMeta";

@Component({
  selector: "rate-passengers-modal",
  templateUrl: "./rate-passengers-modal.component.html",
  styleUrls: ["./rate-passengers-modal.component.sass"]
})
export class RatePassengersModalComponent {
  passengers: Passenger[] = [
    { id: 0, name: "Ivan", rating: 0 },
    { id: 1, name: "Egor", rating: 0 },
    { id: 2, name: "Semen", rating: 0 },
    { id: 3, name: "Fedor", rating: 0 }
  ];

  constructor(public dialogRef: MatDialogRef<RatePassengersModalComponent>) {}

  rateUser(clickObj: StarClickMeta): void {
    const passenger = this.passengers.find(
      (i: Passenger) => i.id === clickObj.itemId
    );
    if (!!passenger) {
      passenger.rating = clickObj.rating;
    }
  }
  exitTrip(): void {
    this.dialogRef.close();
  }

  trackById(index, item) {
    return item.id;
  }
}
