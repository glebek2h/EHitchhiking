import { Component, OnInit } from '@angular/core';
import { LoaderSize } from "../../enums/pre-loader-sizes";
import { MatDialogRef } from "@angular/material";
import { TripsService } from "./trips.service";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.sass'],
  providers: [TripsService]
})
export class TripsComponent implements OnInit {

  begin = 0;
  end = 5;
  tripsArray = [];
  loaderSize: LoaderSize = LoaderSize.Large;
  loading = true;
  constructor(public dialogRef: MatDialogRef<TripsComponent>, private tripService: TripsService) {}


  ngOnInit() {
    console.log(this.tripService.getTrips());
    this.tripsArray = this.tripService.getTrips().slice(this.begin, this.end);
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  exit(): void {
    this.dialogRef.close();
  }
  replase_all(): void{
    this.tripService.setService();
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
