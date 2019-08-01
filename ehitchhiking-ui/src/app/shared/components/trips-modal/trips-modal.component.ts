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
	tripsArray = [];
	tripsArrayLength = 0;
	loaderSize: LoaderSize = LoaderSize.Large;
	loading = true;
	scrollObserver: IntersectionObserver;
	order = 0;
	selectedRole: UserState;
	selectedFavorite = false;
	selectedBySort = SortState.None;
	statuses = new FormControl();
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
		this.tripsModalService.getTrips().then((data) => {
			this.scrollObserver.observe(this.markerRef.nativeElement);
			setTimeout(() => {
				this.loading = false;
			}, 1000);
			this.tripsArray = data;
			this.tripsArrayLength = data.length;
		});
	}

	exit(): void {
		this.dialogRef.close();
	}
	replaceAll(): void {
		this.tripsModalService.resetTripsList().then((response) => {
			if (!response) {
				return;
			}
			this.tripsArray = [];
			this.tripsArrayLength = 0;
		});
	}

	trackById(trip) {
		return trip.id;
	}

	filterByRole() {
		this.tripsModalService.roleFilterConfig.isEnable = true;
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
}
