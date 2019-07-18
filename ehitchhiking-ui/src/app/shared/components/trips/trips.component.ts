import { Component, OnInit } from '@angular/core';
import { LoaderSize } from "../../enums/pre-loader-sizes";
import { MatDialogRef } from "@angular/material";
import { Trip } from "./trips";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.sass']
})
export class TripsComponent implements OnInit {
  StatusEnum = Object.freeze({"active":0, "completed":1, "declined":2});
  trips: Trip[] = [
    {id: 0, from_: 'Mstislavca1', to: 'Turovsky', isFavorite: false, status: this.StatusEnum.active },
    {id: 1,from_: 'Mstislavca2', to: 'Turovsky', isFavorite: false, status: this.StatusEnum.active},
    {id: 2, from_: 'Mstislavca3', to: 'Turovsky', isFavorite: false, status: this.StatusEnum.completed},
    {id: 3, from_: 'Mstislavca4', to: 'Turovsky', isFavorite: false, status: this.StatusEnum.completed},
    {id: 4, from_: 'Mstislavca5', to: 'Turovsky', isFavorite: false, status: this.StatusEnum.declined},
    {id: 5, from_: 'Mstislavca5', to: 'Turovsky', isFavorite: false, status: this.StatusEnum.completed},
    {id: 6, from_: 'Mstislavca6', to: 'Turovsky', isFavorite: false, status: this.StatusEnum.declined},
  ];
  begin = 0;
  end = 5;
  tripsArray = [];
  size: LoaderSize = LoaderSize.Large;
  loading = true;
  constructor(public dialogRef: MatDialogRef<TripsComponent>) {}

  ngOnInit() {
    console.log(this.trips);
    this.tripsArray = this.trips.slice(this.begin, this.end);
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  exit(): void {
    this.dialogRef.close();
  }
  replase_all(): void{
    this.trips= [];
    this.ngOnInit();
  }

  trackByFn(index, trip) {
    return trip.id;
  }

  tripChange(trip) {
    console.log('Change', trip);
  }

  downloadMore(){
    this.end+=5;
    this.ngOnInit();
  }
}
