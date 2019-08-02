import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';
import {DELETE_ROUTE_MARKER} from '../../../shared/constants/modal-constants';
import {Route} from '@pages/main-screen/Route';
import {MainScreenService} from '@shared/services/api.services/main-screen.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';

@Component({
	selector: 'app-routes-list',
	templateUrl: './routes-list.component.html',
	styleUrls: ['./routes-list.component.sass'],
	providers: [MainScreenService],
})
export class RoutesListComponent implements OnInit {
	@Input() activeRoutesCollection: Partial<Route>[];
  @Input() tripData: Partial<Route>;
	@Input() isDisabledSubmitRouteButton: boolean;
	@Input() passengersCoords: number[] = [];
	@Output() routeToDisplay = new EventEmitter<any>(); // TODO
	@Output() formData = new EventEmitter<any>();

	isChecked: boolean;
	ROUTES_ON_MAP_COUNT = 3;

	constructor(private mainScreenService: MainScreenService) {}

	ngOnInit() {
		this.isChecked = false;
	}

	parseDate(date: Date): string {
		return UtilsService.formatDate(date);
	}

	displayRoute(index: number, matCheckbox) {
		this.isChecked = !this.isChecked;
		matCheckbox.checked
			? (this.activeRoutesCollection[index].displayed = false)
			: (this.activeRoutesCollection[index].displayed = true);
		this.routeToDisplay.emit({value: index});
	}

	submitRoute(index: number) {
		this.activeRoutesCollection[index].passengerCoordinate = this.passengersCoords;
    this.activeRoutesCollection[index].placesSelect = this.tripData.placesSelect;
		this.mainScreenService.savePassengerRoute(this.activeRoutesCollection[index]);
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
