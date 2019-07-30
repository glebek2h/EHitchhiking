import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoaderSize} from '../../enums/pre-loader-sizes';
import {MatDialogRef} from '@angular/material';
import {TripsModalService} from './trips-modal.service';
import {SortState} from '../../enums/SortState';
import {NUMBER_OF_TRIPS_VISIBLE_ON_PAGE} from '@shared/constants/modal-constants';
import {FormControl} from '@angular/forms';
import {TripStatus} from '@shared/enums/TripStatus';
import {UserState} from '@shared/enums/UserState';

@Component({
	selector: 'app-trips',
	templateUrl: './trips-modal.component.html',
	styleUrls: ['./trips-modal.component.sass'],
	providers: [TripsModalService],
})
export class TripsModalComponent implements OnInit {
	limit = NUMBER_OF_TRIPS_VISIBLE_ON_PAGE;
	tripsArray = [];
	tripsArrayLenght = 0;
	loaderSize: LoaderSize = LoaderSize.Large;
	loading = true;
	scrollObserver: IntersectionObserver;
	order = 0;
	role = {roleField: 'role', isEnable: false};
	selectedRole: number;
	selectedFavorite = false;
	selectedSortByRating = false;
	selectedBySort = SortState.None;
	selectedByStatus = [];

	roles = [{value: 0, viewValue: 'Passenger'}, {value: 1, viewValue: 'Driver'}, {value: 2, viewValue: 'All'}];
	statuses = new FormControl();
	statusesTrip = [
		{value: 0, viewValue: 'Active'},
		{value: 1, viewValue: 'Completed'},
		{value: 2, viewValue: 'Declined'},
	];
	statusFilterConfig = {fieldName: 'status', isEnabled: false};
	@ViewChild('sMarker', {static: true}) markerRef: ElementRef;
	rating: number;

	constructor(public dialogRef: MatDialogRef<TripsModalComponent>, private tripService: TripsModalService) {
		this.scrollObserver = new IntersectionObserver(this.onScroll.bind(this), {
			threshold: 1,
		});
	}

	onScroll(entries: IntersectionObserverEntry[]) {
		for (let entry of entries) {
			if (entry.isIntersecting) this.limit += NUMBER_OF_TRIPS_VISIBLE_ON_PAGE;
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

	filterByRole() {
		this.role.isEnable = true;
		console.log(this.role.isEnable);
	}

	filterByStatus() {
		this.statusFilterConfig.isEnabled = true;
		this.selectedByStatus = Object.values(this.statuses.value);
	}

	changedFavorite() {
		console.log('selectedFavorite' + ' ' + this.selectedSortByRating);
	}

	ChangeSort() {
		switch (this.selectedBySort) {
			case SortState.None:
				this.selectedBySort = SortState.ASC;
				this.order = 1;
				break;
			case SortState.ASC:
				this.selectedBySort = SortState.DESC;
				this.order = -1;
				break;
			case SortState.DESC:
				this.selectedBySort = SortState.None;
				this.order = 0;
				break;
		}
	}
}
