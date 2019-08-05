import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoaderSize} from '../../enums/pre-loader-sizes';
import {MatDialogRef} from '@angular/material';
import {NUMBER_OF_TRIPS_VISIBLE_ON_PAGE} from '@shared/constants/modal-constants';
import {ActiveTripsApiService} from '@shared/services/api.services/active-trips.api.service';
import {ActiveTrip} from '@shared/models/active-trip';

@Component({
	selector: 'app-active-trips-modal',
	templateUrl: './active-trips-modal.component.html',
	styleUrls: ['./active-trips-modal.component.sass'],
})
export class ActiveTripsModalComponent implements OnInit {
	limit = NUMBER_OF_TRIPS_VISIBLE_ON_PAGE;
	tripsArray = [];
	loaderSize: LoaderSize = LoaderSize.Large;
	loading = true;
	scrollObserver: IntersectionObserver;
	role = {roleField: 'role', isEnable: false};
	selectedRole: number;
	@ViewChild('sMarker', {static: true}) markerRef: ElementRef;
	isShowTripInfo = false;
	tripInfo: ActiveTrip;

	roles = [{value: 1, viewValue: 'Passenger'}, {value: 2, viewValue: 'Driver'}, {value: 3, viewValue: 'All'}];

	constructor(
		public dialogRef: MatDialogRef<ActiveTripsModalComponent>,
		private activeTripsApiService: ActiveTripsApiService
	) {
		this.scrollObserver = new IntersectionObserver(this.onScroll.bind(this), {
			threshold: 1,
		});
	}

	onScroll(entries: IntersectionObserverEntry[]) {
		for (let entry of entries) {
			if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
				this.limit += NUMBER_OF_TRIPS_VISIBLE_ON_PAGE;
			}
		}
		if (this.limit >= this.tripsArray.length) {
			this.scrollObserver.unobserve(this.markerRef.nativeElement);
		}
	}

	ngOnInit() {
		this.scrollObserver.observe(this.markerRef.nativeElement);
		this.fetchTrips();
	}

	fetchTrips() {
		this.loading = true;
		this.activeTripsApiService
			.getActiveTrips()
			.then((data) => {
				this.tripsArray = data;
			})
			.finally(() => {
				this.loading = false;
			});
	}

	refresh(status: boolean) {
		if (!status) {
			return;
		}
		this.fetchTrips();
	}
	filterByRole() {
		this.role.isEnable = true;
	}

	trackById(trip: ActiveTrip) {
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
