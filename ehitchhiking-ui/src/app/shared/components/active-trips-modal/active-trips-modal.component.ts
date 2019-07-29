import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoaderSize} from '../../enums/pre-loader-sizes';
import {MatDialogRef} from '@angular/material';
import {ActiveTripsModalService} from './active-trips-modal.service';
import {Trip} from '../trips-modal/trips';
import {ActiveTrip} from '../active-trip/active-trip';

@Component({
	selector: 'app-active-trips-modal',
	templateUrl: './active-trips-modal.component.html',
	styleUrls: ['./active-trips-modal.component.sass'],
	providers: [ActiveTripsModalService],
})
export class ActiveTripsModalComponent implements OnInit {
	limit = 4;
	tripsArray = [];
	tripsArrayLenght = 0;
	loaderSize: LoaderSize = LoaderSize.Large;
	loading = true;
	scrollObserver: IntersectionObserver;
	role = {roleField: 'role', isEnable: false};
	selectedRole: number;
	@ViewChild('sMarker', {static: true}) markerRef: ElementRef;
	isShowTripInfo = false;
	tripInfo: Trip;

	roles = [{value: 0, viewValue: 'Passenger'}, {value: 1, viewValue: 'Driver'}, {value: 2, viewValue: 'All'}];

	constructor(
		public dialogRef: MatDialogRef<ActiveTripsModalComponent>,
		private tripService: ActiveTripsModalService
	) {
		this.scrollObserver = new IntersectionObserver(this.onScroll.bind(this), {
			threshold: 1,
		});
	}

	onScroll(entries: IntersectionObserverEntry[]) {
		for (let entry of entries) {
			if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
				this.limit += 4;
			}
		}
		if (this.limit >= this.tripsArray.length) {
      this.scrollObserver.unobserve(this.markerRef.nativeElement);
    }
	}

	ngOnInit() {
		this.scrollObserver.observe(this.markerRef.nativeElement);
		this.tripsArrayLenght = this.tripService.getTrips().length;
		this.fetchTrips();
	}

	fetchTrips() {
		this.tripsArray = this.tripService.getTrips();
		setTimeout(() => {
			this.loading = false;
		}, 1000);
	}

	filterByRole() {
		this.role.isEnable = true;
	}

	trackById(trip) {
		return trip.id;
	}

	exit(): void {
		this.dialogRef.close();
	}

	showTripInfo(trip: ActiveTrip) {
		this.tripInfo = trip;
		this.isShowTripInfo = !this.isShowTripInfo;
	}

	closeInfo() {
		this.isShowTripInfo = !this.isShowTripInfo;
	}
}
