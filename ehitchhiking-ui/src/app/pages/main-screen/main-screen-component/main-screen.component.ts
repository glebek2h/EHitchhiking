import {Component, OnInit} from '@angular/core';
import {UserState} from '@shared/enums/UserState';
import {YandexMapService} from '../yandex-map/yandex-map.service';
import {User} from '@shared/models/user';
import {ApiService} from '@shared/services/api.services/api.service';
import {Route} from '../Route';
import {MainScreenService} from '@shared/services/api.services/main-screen.service';
import {MapTripFormService} from '@shared/services/map-trip-form.service';
import {ActiveTripsMapService} from '@shared/services/active-trips-map.service';
import {UserService} from '@shared/services/user.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ConfirmationModalComponent} from '@shared/modals/confirmation-modal/confirmation-modal.component';
import {DEFAULT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_SM} from '@shared/constants/modal-constants';
import {MatDialog} from '@angular/material';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';
import {NotificationService} from '@shared/services/notification.service';

@Component({
	selector: 'app-main-screen',
	templateUrl: './main-screen.component.html',
	styleUrls: ['./main-screen.component.sass'],
	providers: [ApiService, MainScreenService],
})
export class MainScreenComponent implements OnInit {
	constructor(
		private mainScreenService: MainScreenService,
		private mapTripFormService: MapTripFormService,
		private activeTripsMapService: ActiveTripsMapService,
		private userService: UserService,
		private apiService: ApiService,
		public dialog: MatDialog,
		public notificationService: NotificationService
	) {
		this.activeTripsMapService.getMainScreenInfo().subscribe(() => {
			this.toggleMapInterfaceToDefault();
			this.isDisabledMatToggleGroup = true;
			this.isShownPlusButton = false;
			this.isShownCompleteButton = true;
		});
		this.activeTripsMapService.isDeleteCompleteButton().subscribe(() => (this.isShownCompleteButton = false));
		this.activeTripsMapService.getCompletedTrip().subscribe((id) => (this.idOfCompletedTrip = id));
	}

	idOfCompletedTrip: number;
	tripFormData: any; // TODO
	isReset: boolean;
	isHidden: boolean;
	userState: UserState;
	isSavedRoute: boolean;
	isShownRoutesList: boolean;
	isShownCompleteButton: boolean;
	isShownViewRoutesButton: boolean;
	isShownSaveRouteButton: boolean;
	isDisabledSubmitRouteButton: boolean;
	isDisabledMatToggleGroup: boolean;
	editStatePlusButton: boolean;
	isShownPlusButton = true;
	displayedRouteIndex: number;
	mapTriggers = {};
	redrawPassengerDriverIconTriggers = {};
	redrawTriggers: boolean;
	activePassengerButton: boolean;
	activeDriverButton: boolean;
	filterData;
	loading: boolean;
	loaderSize: LoaderSize = LoaderSize.Large;

	startEndCoordinates: number[] = [];
	sendFormData;
	passengerCoordinates: number[] = [];

	routes: Partial<Route>[] = [];
	copyRoutes: Partial<Route>[] = [];

	currentUser: User;

	static readonly COMPLETE_CONFIRMATION_MESSAGE: string = 'Do you really want to complete this trip?';

	private getCarsList(userId: string): Promise<any> {
		return this.apiService.doGet(URL_REGISTRY.CAR.GET_ALL, false, {id: userId}, false);
	}

	ngOnInit() {
		this.isDisabledSubmitRouteButton = true;
		this.isHidden = true;
		this.userState = UserState.Passenger;
		this.copyRoutes = this.routes.slice();
		this.currentUser = this.userService.getCurrentUser();
		this.getCarsList(this.userService.getCurrentUser().id).then((data) => {
			this.currentUser.cars = data;
		});
	}

	openTripRegistrationForm(): void {
		this.isReset = true;
		this.isHidden = !this.isHidden;
	}
	openConfirmationForm() {
		const dialogRef = this.dialog.open(ConfirmationModalComponent, {
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			width: MAT_DIALOG_WIDTH_SM,
			data: {
				question: MainScreenComponent.COMPLETE_CONFIRMATION_MESSAGE,
				confirmButtonText: 'yes',
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.toggleMapInterfaceToDefault();
				this.loading = true;
				this.mainScreenService.completeDriverTrip(this.idOfCompletedTrip).finally(() => {
					this.loading = false;
				});
			}
		});
	}

	getData(data) {
		this.sendFormData = data;
		this.tripFormData = data;
		this.isHidden = true;
		this.editStatePlusButton = true;
		//this.mapTriggers = {reset: true}// TODO: be careful with this, don't delete
	}

	getStartEndCoords(data) {
		this.startEndCoordinates = data;
		this.sendFormData.coords = this.startEndCoordinates;
		if (this.userState === UserState.Passenger) {
			this.mainScreenService.getDriversRoutes(this.sendFormData).then((routes) => {
				this.routes = routes;
				this.tripFormData = this.sendFormData;
			});
		}
	}
	getPassengerTripData(data) {
		this.editStatePlusButton = true;
		this.sendFormData = data;
		this.isHidden = true;
	}

	saveRoute() {
		this.isSavedRoute = !this.isSavedRoute;
		this.isShownSaveRouteButton = false;
		this.mainScreenService.saveDriverRoute(this.tripFormData);
	}

	viewRoutes() {
		this.isShownRoutesList = !this.isShownRoutesList;
	}

	setIsShownViewRoutesButtonFlag(data) {
		if (this.userState === UserState.Passenger) {
			this.isShownViewRoutesButton = data;
		}
	}

	setIsShownSaveRouteButtonFlag(data) {
		if (this.userState === UserState.Driver) {
			this.isShownSaveRouteButton = data;
		}
	}

	toggleStateToPassenger() {
		this.activePassengerButton = true;
		this.activeDriverButton = false;
		this.userState = UserState.Passenger;
		this.redrawPassengerDriverIconTriggers = {reset: true};
		this.toggleMapInterfaceToDefault();
	}

	toggleStateToDriver(): void {
		if (!this.currentUser || !this.currentUser.cars || !this.currentUser.cars.length) {
			this.notificationService.showInfoNotification('Please add a car to become a driver.');
			return;
		}
		this.activeDriverButton = true;
		this.activePassengerButton = false;
		this.userState = UserState.Driver;
		this.redrawPassengerDriverIconTriggers = {reset: true};
		this.toggleMapInterfaceToDefault();
	}

	toggleMapInterfaceToDefault() {
		this.editStatePlusButton = false;
		this.isShownViewRoutesButton = false;
		this.isReset = false;
		this.isHidden = true;
		this.isSavedRoute = false;
		this.isShownRoutesList = false;
		this.isShownSaveRouteButton = false;
		this.redrawTriggers = false;
		this.mapTriggers = {reset: true};
		this.isDisabledMatToggleGroup = false;
		this.isShownPlusButton = true;
		this.isShownCompleteButton = false;
	}

	getIndexToDisplay(data) {
		this.displayedRouteIndex = data;
		this.mapTriggers = {reset: true};
	}

	getFilterData(data) {
		this.filterData = data;
		this.routes = YandexMapService.filterRoutes(this.copyRoutes, 0, 10, this.filterData);
		this.mapTriggers = {reset: true};
		this.redrawTriggers = true;
	}

	getPassengerPlaceMarkInfo(data) {
		this.isDisabledSubmitRouteButton = false;
		this.passengerCoordinates = data;
	}

	setIsShownRegistrationFromFlag(data) {
		this.isReset = false;
		this.isHidden = !this.isHidden;
	}

	closeRoutes(data) {
		this.isShownRoutesList = false;
	}
}
