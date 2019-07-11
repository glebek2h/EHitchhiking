import {Component, HostBinding, OnInit} from '@angular/core';
import {MenuRatePassangersService} from '../../services/menu-rate-passangers.service';

export interface Passanger {
  id: number;
  name: string;
  rating: number;
}
@Component({
  selector: 'app-rate-passang-screen',
  templateUrl: './rate-passang-screen.component.html',
  styleUrls: ['./rate-passang-screen.component.sass']
})
export class RatePassangScreenComponent implements OnInit {
  ratingClicked: number;

  items: Passanger[] = [
    {id: 0, name: 'Ivan', rating: 0},
    {id: 1, name: 'Egor', rating: 0},
    {id: 2, name: 'Semen', rating: 0},
    {id: 3, name: 'Fedor', rating: 0},
  ];

  message: boolean;

  constructor(private data: MenuRatePassangersService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  ratingComponentClick(clickObj: any): void {
    const item = this.items.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
    }
  }
  exitTripFunction() {
    this.message = false;
  }

}
