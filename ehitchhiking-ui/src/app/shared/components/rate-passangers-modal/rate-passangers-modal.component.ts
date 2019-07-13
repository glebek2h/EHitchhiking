import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Passanger} from './passanger';

@Component({
  selector: 'rate-passangers-modal',
  templateUrl: './rate-passangers-modal.component.html',
  styleUrls: ['./rate-passangers-modal.component.sass']
})
export class RatePassangersModalComponent {

  passangers: Passanger[] = [
    {id: 0, name: 'Ivan', rating: 0},
    {id: 1, name: 'Egor', rating: 0},
    {id: 2, name: 'Semen', rating: 0},
    {id: 3, name: 'Fedor', rating: 0},
  ];

  constructor( public dialogRef: MatDialogRef<RatePassangersModalComponent>) {}

  rateUser(clickObj): void {
    const passanger = this.passangers.find(((i: Passanger) => i.id === clickObj.itemId));
    if (!!passanger) {
      passanger.rating = clickObj.rating;
    }
  }
  exitTrip(): void {
    this.dialogRef.close();
  }

  trackByFn(index, item) {
    return item.id;
  }

}
