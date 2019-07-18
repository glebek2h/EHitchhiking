import {Component, EventEmitter, OnInit} from '@angular/core';

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

  ngOnInit() {
    this.isHiddenTripRegistration = true;
  }

  openTripRegistrationForm(): void {
	  this.isHiddenTripRegistration = !this.isHiddenTripRegistration;
  }

  getData(data) {
   // console.log(data);
    this.tripFormData = data;
  }

  saveRoute() {
    this.isSavedRoute = !this.isSavedRoute;
  }
}
