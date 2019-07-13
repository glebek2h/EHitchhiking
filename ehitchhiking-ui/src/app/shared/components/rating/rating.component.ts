import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {rate} from './rate';
import {starClickMeta} from './starClickMeta';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.sass'],
})
export class RatingComponent implements OnInit {
	@Input() rating: number;
	@Input() itemId: number;
	@Output() ratingClick: EventEmitter<starClickMeta> = new EventEmitter<starClickMeta>();
	inputName: string;

	ratings: rate[] = [
		{title: 'Rocks', value: 5},
		{title: 'Pretty good', value: 4},
		{title: 'Meh', value: 3},
		{title: 'Kinda bad', value: 2},
		{title: 'Sucks big time', value: 2},
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
