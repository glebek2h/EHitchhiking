import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {Route} from "@pages/main-screen/Route";
import {ApiService} from "@shared/services/api.service";
import {MainScreenService} from "@shared/api-services/main-screen.service";

@Component({
	selector: 'app-routes-list',
	templateUrl: './routes-list.component.html',
	styleUrls: ['./routes-list.component.sass'],
  providers: [ApiService,MainScreenService],
})
export class RoutesListComponent implements OnInit {
	@Input() activeRoutesCollection: Partial<Route>[];
  @Input() isDisabledSubmitRouteButton: boolean;
	@Output() routeToDisplay = new EventEmitter<any>(); // TODO
  @Output() formData = new EventEmitter<any>();

  isChecked: boolean;
  ROUTES_ON_MAP_COUNT = 3;

	constructor(private apiService: ApiService,private mainScreenService: MainScreenService) {}

	ngOnInit() {
	  this.isChecked = false;
  }

	parseDate(date: Date): string {
		return UtilsService.formatDate(date);
	}

  displayRoute(index: number, matCheckbox) {
    this.isChecked = !this.isChecked;
    matCheckbox.checked ? this.activeRoutesCollection[index].displayed = false : this.activeRoutesCollection[index].displayed = true;
    this.routeToDisplay.emit({'value': index});
  }

  submitRoute(index: number) {
    const route = this.activeRoutesCollection[index];
    this.mainScreenService.savePassengerRoute(route)
      .subscribe((data) => console.log(data));
  }

  getData(data: any) {
    this.formData.emit(data);
  }

  displayGetInLineButton(index: number, applybutton) {
    if (this.activeRoutesCollection[index].placesSelect === 0) {
      applybutton.disabled = true;
      return true;
    }
    return false;
  }
}
