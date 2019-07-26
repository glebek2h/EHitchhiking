import {Component, OnInit} from '@angular/core';
import {UserState} from '@shared/enums/UserState';
import {YandexMapService} from '../yandex-map/yandex-map.service';
import {ApiService} from "@shared/services/api.service";
import {URL_REGISTRY} from "@shared/constants/urlRegistry";

@Component({
	selector: 'app-main-screen',
	templateUrl: './main-screen.component.html',
	styleUrls: ['./main-screen.component.sass'],
  providers: [ApiService]
})
export class MainScreenComponent implements OnInit {
	constructor(private apiService: ApiService) {}

	tripFormData: any; // TODO
	isHiddenTripRegistration: boolean;
	userState: string;
	isSavedRoute: boolean;
	isShownRoutesList: boolean;
	isShownViewRoutesButton: boolean;
	isShownSaveRouteButton: boolean;
	editStatePlusButton: boolean;
	displayedRouteIndex: number;
	mapTriggers = {};
	redrawTriggers: boolean;
	filterData;

	routes: Partial<Route>[] = [];
	copyRoutes: Partial<Route>[] = [];

	ngOnInit() {
		this.isHiddenTripRegistration = true;
		this.userState = UserState.passenger;
		this.apiService.doGet(URL_REGISTRY['map.getRoutes']).subscribe(data => console.log(data));
  /*this.apiService.doDelete(URL_REGISTRY['blacklist.delete'], false, {
    idPas: this.blacklistUsersArray[item].id,idDr: this.curUser.id}).subscribe(data => console.log(data));*/
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
		console.log(this.tripFormData);
	}

	saveRoute() {
		this.isSavedRoute = !this.isSavedRoute;
		this.isShownSaveRouteButton = false;
    console.log({
      startingPoint: this.tripFormData.from,
      endingPoint: this.tripFormData.to,
      startingTime: this.tripFormData.departureDate,
      endingTime: this.tripFormData.departureDate,
      idOfCar: 41,
      seats: this.tripFormData.placesSelect,
    });
    this.apiService
      .doPost(URL_REGISTRY['map.postDriverRoute'], false, {
        startingPoint: this.tripFormData.from,
        endingPoint: this.tripFormData.to,
        startingTime: this.tripFormData.departureDate,
        endingTime: this.tripFormData.departureDate,
        idOfCar: 41,
        seats: this.tripFormData.placesSelect,
      })
      .subscribe((data) => console.log(data));
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
}
