import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoaderSize} from '../../enums/pre-loader-sizes';
import {MatDialogRef} from '@angular/material';
import {TripsModalService} from './trips-modal.service';
import { Trip } from "./trips";
import { compareNumbers } from "@angular/compiler-cli/src/diagnostics/typescript_version";
import { UserState } from "../../enums/UserState";
import { SortState } from "../../enums/SortState";

@Component({
	selector: 'app-trips',
	templateUrl: './trips-modal.component.html',
	styleUrls: ['./trips-modal.component.sass'],
	providers: [TripsModalService],
})
export class TripsModalComponent implements OnInit {
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

  roles = [

    {value: 0, viewValue: 'Passenger'},
    {value: 1, viewValue: 'Driver'},
    {value: 2, viewValue: 'All'},
  ];


  @ViewChild('sMarker', {static: true}) markerRef: ElementRef;
  rating: number;

	constructor(public dialogRef: MatDialogRef<TripsModalComponent>, private tripService: TripsModalService) {
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
	exit(): void {
		this.dialogRef.close();
	}
	replaceAll(): void {
		this.tripService.resetTripsList();
		this.fetchTrips();
	}

	trackById(index, trip) {
		return trip.id;
	}

  filterByRole(){
	  this.role.isEnable = true;
	  console.log(this.role.isEnable);
  }

  changedFavorite(){
	  console.log('selectedFavorite' + " "+ this.selectedSortByRating);
  }

  ChangeSort(){
    if (this.selectedBySort === 0 ){
      this.selectedBySort = 1;
      this.order = 1;
    }
	  else if (this.selectedBySort === 1 ){
	    this.selectedBySort = 2;
	    this.order = -1;
    }
	  else if (this.selectedBySort ===2){
	    this.selectedBySort = 0;
	    this.order = 0;
    }
  }

}
