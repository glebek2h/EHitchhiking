import {Component, OnInit} from '@angular/core';
import {UserState} from '../../../shared/enums/UserState';

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
    this.routes.push({
      from: 'Рождественская 106, Минск',
      to: 'Проспект Независимости 4, Минск',
      datePicker: new Date(),
      timePicker: '12:00 am',
      placesSelect: 2,
    });
    this.routes.push({
      from: 'Пионерская 30Б, Минск',
      to: 'Проспект Независимости 4, Минск',
      datePicker: new Date(),
      timePicker: '12:00 am',
      placesSelect: 4,
    });
    this.routes.push({
      from: 'Шаранговича 62, Минск',
      to: 'Проспект Независимости 4, Минск',
      datePicker: new Date(),
      timePicker: '15:00 am',
      placesSelect: 1,
    });
    this.routes.push({
      from: 'Магнитная 8, Минск',
      to: 'Проспект Независимости 4, Минск',
      datePicker: new Date(),
      timePicker: '15:00 am',
      placesSelect: 1,
    });
    this.routes.push({
      from: 'Подгорная 29, Минск',
      to: 'Проспект Независимости 4, Минск',
      datePicker: new Date(),
      timePicker: '15:00 am',
      placesSelect: 1,
    });
  }

  openTripRegistrationForm(): void {
	  this.isHiddenTripRegistration = !this.isHiddenTripRegistration;
  }

  getData(data) {
    this.tripFormData = data;
  }

  saveRoute() {
    this.isSavedRoute = !this.isSavedRoute;
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

}
