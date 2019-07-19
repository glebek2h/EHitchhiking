import { Component, OnInit } from '@angular/core';
import { LoaderSize } from "../../enums/pre-loader-sizes";
import { MatDialogRef } from "@angular/material";
import { TripsModalService } from "./trips-modal.service";

@Component({
  selector: 'app-trips',
  templateUrl: './trips-modal.component.html',
  styleUrls: ['./trips-modal.component.sass'],
  providers: [TripsModalService]
})
export class TripsModalComponent implements OnInit {

  begin = 0;
  end = 5;
  tripsArray = [];
  tripsArrayLenght = 0;
  loaderSize: LoaderSize = LoaderSize.Large;
  loading = true;
  constructor(public dialogRef: MatDialogRef<TripsModalComponent>, private tripService: TripsModalService) {}


  ngOnInit() {
    console.log(this.tripService.getTrips());
    this.tripsArrayLenght = this.tripService.getTrips().length;
    this.fetchTrips();
  }
  fetchTrips(){
    this.tripsArray = this.tripService.getTrips().slice(this.begin, this.end);
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  exit(): void {
    this.dialogRef.close();
  }
  replaceAll(): void{
    this.tripService.setService();
    this.fetchTrips();
  }

  trackByFn(index, trip) {
    return trip.id;
  }

  tripChange(trip) {
    console.log('Change', trip);
  }

  downloadMore(){
    this.end+=5;
    this.fetchTrips();
  }
}
