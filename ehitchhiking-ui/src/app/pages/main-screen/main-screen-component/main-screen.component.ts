import {Component, OnInit} from '@angular/core';
import {UserState} from '../../../shared/enums/UserState';
import {YandexMapService} from "../yandex-map/yandex-map.service";

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
	}

	saveRoute() {
		this.isSavedRoute = !this.isSavedRoute;
		this.isShownSaveRouteButton = false;
	}

	viewRoutes() {
		this.isShownRoutesList = !this.isShownRoutesList;
	}

	getIsShown(data) {
		if (this.userState === UserState.passenger) {
			this.isShownViewRoutesButton = data;
		}
	}

	getIsShownSaveRoute(data) {
		if (this.userState === UserState.driver) {
			this.isShownSaveRouteButton = data;
		}
	}

	toggleStateToPassenger() {
	  this.userState = UserState.passenger;
  }

  toggleStateToDriver() {
	  this.userState = UserState.driver;
  }
}
