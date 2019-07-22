import {Component, OnInit} from '@angular/core';
import {UserState} from '../../../shared/enums/UserState';
import {YandexMapService} from '../yandex-map/yandex-map.service';

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
	isPensilStateOfPlusButton: boolean;
	isNeedCleanMap: boolean; // Нужно ли удалить все маршруты с карты
  indexRouteToDisplay: number;
  mapTriggers = {};

	routes: Partial<Route>[] = [];

	ngOnInit() {
		this.isHiddenTripRegistration = true;
		this.userState = UserState.passenger;
		this.routes = YandexMapService.getSomeRoutes();
	}

	openTripRegistrationForm(): void {
		this.isHiddenTripRegistration = !this.isHiddenTripRegistration;
	}

	getData(data) {
		this.tripFormData = data;
    this.isHiddenTripRegistration = true;
    this.isPensilStateOfPlusButton = true;
    this.mapTriggers = {reset:true};
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
	  this.isPensilStateOfPlusButton = false;
	  this.isShownSaveRouteButton = false;
	  this.isNeedCleanMap = true;
	  this.mapTriggers = {reset:true};
  }

  toggleStateToDriver() {
	  this.userState = UserState.driver;
    this.isPensilStateOfPlusButton = false;
    this.isShownViewRoutesButton = false;
    this.isNeedCleanMap = true;
    this.mapTriggers = {reset:true};
  }

  getIndexToDisplay(data) {
    this.indexRouteToDisplay = data;
    this.isNeedCleanMap = true;
    this.mapTriggers = {reset:true};
  }
}
