import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rate} from './rate';
import {StarClickMeta} from './starClickMeta';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<StarClickMeta> = new EventEmitter<
    StarClickMeta
    >();
  inputName: string;

  ratings: Rate[] = [
    {title: 'Rocks', value: 5},
    {title: 'Pretty good', value: 4},
    {title: 'Meh', value: 3},
    {title: 'Kinda bad', value: 2},
    {title: 'Sucks big time', value: 1},
  ];

  constructor() {}

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating,
    });
  }
  trackById(index, item) {
    return item.id;
  }
}
