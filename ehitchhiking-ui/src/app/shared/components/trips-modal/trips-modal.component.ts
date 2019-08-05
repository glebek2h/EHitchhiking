import {TripStatus} from './../../enums/TripStatus';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoaderSize} from '../../enums/pre-loader-sizes';
import {MatDialogRef} from '@angular/material';
import {SortState} from '../../enums/SortState';
import {NUMBER_OF_TRIPS_VISIBLE_ON_PAGE} from '@shared/constants/modal-constants';
import {FormControl} from '@angular/forms';
import {UserState} from '@shared/enums/UserState';
import {TripsModalService} from '../../services/trips-modal.service';

@Component({
	selector: 'app-trips',
	templateUrl: './trips-modal.component.html',
	styleUrls: ['./trips-modal.component.sass'],
})
export class TripsModalComponent implements OnInit {
	limit = NUMBER_OF_TRIPS_VISIBLE_ON_PAGE;
	tripsArray = null;
	loaderSize: LoaderSize = LoaderSize.Large;
	isLoading: boolean;
	scrollObserver: IntersectionObserver;
	order = 0;
	selectedRole: UserState;
	selectedFavorite = false;
	selectedBySort = SortState.None;
	statuses = new FormControl();
	roles = new FormControl();
	ratings = new FormControl();

	@ViewChild('sMarker', {static: true}) markerRef: ElementRef;
	rating: number;

	constructor(public dialogRef: MatDialogRef<TripsModalComponent>, public tripsModalService: TripsModalService) {
		this.scrollObserver = new IntersectionObserver(this.onScroll.bind(this), {
			threshold: 1,
		});
	}

	onScroll(entries: IntersectionObserverEntry[]) {
		for (let entry of entries) {
			if (entry.isIntersecting) {
				this.limit += NUMBER_OF_TRIPS_VISIBLE_ON_PAGE;
			}
		}
		if (this.limit >= this.tripsArray.length) {
			this.scrollObserver.unobserve(this.markerRef.nativeElement);
		}
	}

	ngOnInit() {
		this.isLoading = true;
		this.tripsModalService
			.getTrips()
			.then((data) => {
				this.scrollObserver.observe(this.markerRef.nativeElement);
				this.tripsArray = data.map((trip) => {
					trip.status = trip.finished ? TripStatus.Completed : TripStatus.Declined;
					return trip;
				});
			})
			.finally(() => {
				this.isLoading = false;
			});
	}

	exit(): void {
		this.dialogRef.close();
	}

	replaceAll(): void {
		this.isLoading = true;
		this.tripsModalService
			.resetTripsList()
			.then((response) => {
				if (!response) {
					return;
				}
				this.tripsArray = [];
			})
			.finally(() => {
				this.isLoading = false;
			});
	}

	trackById(trip) {
		return trip.id;
	}

	filterByRole() {
		this.tripsModalService.roleFilterConfig.selected = Object.values(this.roles.value);
		this.tripsModalService.roleFilterConfig.isEnabled = !!this.tripsModalService.roleFilterConfig.selected.length;
	}

	filterByStatus() {
		this.tripsModalService.statusFilterConfig.selected = Object.values(this.statuses.value);
		this.tripsModalService.statusFilterConfig.isEnabled = !!this.tripsModalService.statusFilterConfig.selected
			.length;
	}

	filterByRating() {
		this.tripsModalService.ratingFilterConfig.selected = Object.values(this.ratings.value);
		this.tripsModalService.ratingFilterConfig.isEnabled = !!this.tripsModalService.ratingFilterConfig.selected
			.length;
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

	onLoadingToggle(loadingState) {
		this.isLoading = loadingState;
	}
}
