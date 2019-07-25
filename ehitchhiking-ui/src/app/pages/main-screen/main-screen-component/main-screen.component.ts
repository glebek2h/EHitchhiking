import {Component, OnInit} from '@angular/core';
import {UserState} from '../../../shared/enums/UserState';
import {YandexMapService} from '../yandex-map/yandex-map.service';
import {Route} from "@pages/main-screen/Route";

@Component({
	selector: 'app-main-screen',
	templateUrl: './main-screen.component.html',
	styleUrls: ['./main-screen.component.sass'],
})
export class MainScreenComponent implements OnInit {
	constructor() {}

	tripFormData: any; // TODO
	isHiddenTripRegistration: boolean;
	userState: string;
	isSavedRoute: boolean;
	isShownRoutesList: boolean;
	isShownViewRoutesButton: boolean;
	isShownSaveRouteButton: boolean;
  isDisabledSubmitRouteButton: boolean;
	editStatePlusButton: boolean;
	displayedRouteIndex: number;
	mapTriggers = {};
	redrawTriggers: boolean;
	filterData;

	routes: Partial<Route>[] = [];
	copyRoutes: Partial<Route>[] = [];

	ngOnInit() {
		this.isHiddenTripRegistration = true;
    this.isDisabledSubmitRouteButton = true;
		this.userState = UserState.passenger;
		this.routes = YandexMapService.getSomeRoutes();
    this.copyRoutes = this.routes.slice();
	}

	openTripRegistrationForm(): void {
		this.isHiddenTripRegistration = !this.isHiddenTripRegistration;
	}

	getData(data) {
		this.tripFormData = data;
		this.isHiddenTripRegistration = true;
		this.editStatePlusButton = true;
		this.mapTriggers = {reset: true};
	}

	saveRoute() {
		this.isSavedRoute = !this.isSavedRoute;
		this.isShownSaveRouteButton = false;
	}

	viewRoutes() {
		this.isShownRoutesList = !this.isShownRoutesList;
	}

	setIsShownViewRoutesButtonFlag(data) {
		if (this.userState === UserState.passenger) {
			this.isShownViewRoutesButton = data;
		}
	}

	setIsShownSaveRouteButtonFlag(data) {
		if (this.userState === UserState.driver) {
			this.isShownSaveRouteButton = data;
		}
	}

	toggleStateToPassenger() {
		this.userState = UserState.passenger;
		this.toggleMapInterfaceToDefault();
	}

	toggleStateToDriver() {
		this.userState = UserState.driver;
		this.toggleMapInterfaceToDefault();
	}

	toggleMapInterfaceToDefault() {
		this.editStatePlusButton = false;
		this.isShownViewRoutesButton = false;
		this.isHiddenTripRegistration = true;
    this.isShownSaveRouteButton = false;
		this.isSavedRoute = false;
		this.isShownRoutesList = false;
		this.mapTriggers = {reset: true};
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
    this.isDisabledSubmitRouteButton = data;
  }
}
