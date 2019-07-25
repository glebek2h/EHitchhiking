import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { LoaderSize } from "../../enums/pre-loader-sizes";
import { SortState } from "../../enums/SortState";
import { MatDialogRef } from "@angular/material";
import { ActiveTripsModalService } from "./active-trips-modal.service";
import { TripsModalService } from "../trips-modal/trips-modal.service";
import { Trip } from "../trips-modal/trips";


@Component({
  selector: 'app-active-trips-modal',
  templateUrl: './active-trips-modal.component.html',
  styleUrls: ['./active-trips-modal.component.sass'],
  providers: [ActiveTripsModalService],
})
export class ActiveTripsModalComponent implements OnInit {

  limit = 5;
  tripsArray = [];
  tripsArrayLenght = 0;
  loaderSize: LoaderSize = LoaderSize.Large;
  loading = true;
  scrollObserver: IntersectionObserver;
  order = 0;
  role = {roleField: 'role', isEnable: false}
  selectedRole :number;
  selectedFavorite = false;
  selectedSortByRating = false;
  selectedBySort = SortState.NoSort;
  @ViewChild('sMarker', {static: true}) markerRef: ElementRef;
  isShowTripInfo = false;
  tripInfo: Trip;

  roles = [
    {value: 0, viewValue: 'Passenger'},
    {value: 1, viewValue: 'Driver'},
    {value: 2, viewValue: 'All'},
  ];


  constructor(public dialogRef: MatDialogRef<ActiveTripsModalComponent>, private tripService: ActiveTripsModalService) {
    this.scrollObserver = new IntersectionObserver(this.onScroll.bind(this), {
      threshold: 1,
    });
  }

  onScroll(entries: IntersectionObserverEntry[]) {
    for (let entry of entries) {
      if (entry.isIntersecting) this.limit += 5;
    }
    if (this.limit >= this.tripsArray.length) this.scrollObserver.unobserve(this.markerRef.nativeElement);
    console.log(`Limit increased ${this.limit}`);
  }

  ngOnInit() {
    this.scrollObserver.observe(this.markerRef.nativeElement);
    console.log(this.tripService.getTrips());
    this.tripsArrayLenght = this.tripService.getTrips().length;
    this.fetchTrips();
  }

  fetchTrips() {
    this.tripsArray = this.tripService.getTrips();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  filterByRole(){
    this.role.isEnable = true;
    console.log(this.role.isEnable);
  }

  trackById(index, trip) {
    return trip.id;
  }

  exit(): void {
    this.dialogRef.close();
  }

  showTripInfo(trip :Trip){
    this.tripInfo = trip;
    this.isShowTripInfo = !this.isShowTripInfo;
  }

  noneTripInfo(){
    this.isShowTripInfo = !this.isShowTripInfo;
  }

}
