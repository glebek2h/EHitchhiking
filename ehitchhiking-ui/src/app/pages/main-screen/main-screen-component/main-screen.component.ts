import {Component, OnInit} from '@angular/core';
import {UserState} from '@shared/enums/UserState';
import {YandexMapService} from '../yandex-map/yandex-map.service';
import {User} from '@shared/models/user';
import {Car} from '@shared/models/car';
import {ApiService} from '@shared/services/api.services/api.service';
import {Route} from '../Route';
import {MainScreenService} from '@shared/services/api.services/main-screen.service';
import {MapTripFormService} from '@shared/services/map-trip-form.service';
import {ActiveTripsMapService} from '@shared/services/active-trips-map.service';
import {UserService} from '@shared/services/user.service';
import {CarInterface} from '@shared/interfaces/car-interface';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

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
		private apiService: ApiService
	) {
		this.activeTripsMapService.getMainScreenInfo().subscribe(() => {
			this.toggleMapInterfaceToDefault();
			this.isDisabledMatToggleGroup = true;
			this.isShownPlusButton = false;
		});
	}

	tripFormData: any; // TODO
	isHiddenTripRegistration: boolean;
	userState: UserState;
	isSavedRoute: boolean;
	isShownRoutesList: boolean;
	isShownViewRoutesButton: boolean;
	isShownSaveRouteButton: boolean;
	isDisabledSubmitRouteButton: boolean;
	isDisabledMatToggleGroup: boolean;
	editStatePlusButton: boolean;
	isShownPlusButton = true;
	displayedRouteIndex: number;
	mapTriggers = {};
	redrawTriggers: boolean;
  activePassengerButton: boolean;
  activeDriverButton: boolean;
	filterData;

	startEndCoordinates: number[] = [];
	sendFormData;
	passengerCoordinates: number[] = [];

	routes: Partial<Route>[] = [];
	copyRoutes: Partial<Route>[] = [];

	currentUser: User;

	private getCarsList(userId: string): Promise<any> {
		return this.apiService.doGet(URL_REGISTRY.CAR.GET_ALL, false, {id: userId});
	}

	ngOnInit() {
		this.isDisabledSubmitRouteButton = true;
		this.userState = UserState.Passenger;
		this.routes = YandexMapService.getSomeRoutes();
		this.copyRoutes = this.routes.slice();
		this.currentUser = this.userService.getCurrentUser();
		this.getCarsList(this.userService.getCurrentUser().id).then((data) => {
			this.currentUser.cars = data;
		});
	}

  openTripRegistrationForm(): void {
		this.isHiddenTripRegistration = !this.isHiddenTripRegistration;
	}

	getData(data) {
		this.sendFormData = data;
		this.tripFormData = data;
		this.isHiddenTripRegistration = true;
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
		this.sendFormData = data;
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
		this.toggleMapInterfaceToDefault();
	}

	toggleStateToDriver() {
    this.activeDriverButton = true;
    this.activePassengerButton = false;
		this.userState = UserState.Driver;
		this.toggleMapInterfaceToDefault();
	}

	toggleMapInterfaceToDefault() {
		this.editStatePlusButton = false;
		this.isShownViewRoutesButton = false;
		this.isHiddenTripRegistration = false;
		this.isSavedRoute = false;
		this.isShownRoutesList = false;
		this.isShownSaveRouteButton = false;
		this.redrawTriggers = false;
		this.mapTriggers = {reset: true};
		this.isDisabledMatToggleGroup = false;
		this.isShownPlusButton = true;
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

}
