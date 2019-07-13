import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {rate} from './rate';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.sass'],
})
export class RatingComponent implements OnInit {
	@Input() rating: number;
	@Input() itemId: number;
	@Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
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
}
