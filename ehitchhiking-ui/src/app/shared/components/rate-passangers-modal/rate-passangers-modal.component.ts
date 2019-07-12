import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

export interface Passanger {
  id: number;
  name: string;
  rating: number;
}
@Component({
  selector: 'app-rate-passang-screen',
  templateUrl: './rate-passangers-modal.component.html',
  styleUrls: ['./rate-passangers-modal.component.sass']
})
export class RatePassangersModalComponent {
  ratingClicked: number;

  items: Passanger[] = [
    {id: 0, name: 'Ivan', rating: 0},
    {id: 1, name: 'Egor', rating: 0},
    {id: 2, name: 'Semen', rating: 0},
    {id: 3, name: 'Fedor', rating: 0},
  ];

  constructor( public dialogRef: MatDialogRef<RatePassangersModalComponent>) {}

  ratingComponentClick(clickObj): void {
    const item = this.items.find(((i: Passanger) => i.id === clickObj.itemId));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
