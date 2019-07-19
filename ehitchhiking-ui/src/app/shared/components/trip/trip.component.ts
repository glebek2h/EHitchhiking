import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Trip } from "../trips-modal/trips";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.sass']
})
export class TripComponent implements OnInit {

  @Input() trip: Trip;

  @Output() change: EventEmitter<Trip>;

  constructor() {
    this.change = new EventEmitter();
  }

  ngOnInit() {
  }

  handleChange(mode: string) {
    switch (mode) {
      case 'favorite':
        this.trip.isFavorite = !this.trip.isFavorite;
        break;
      default: break;
    }
    this.change.emit(this.trip);
  }

}
