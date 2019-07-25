import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';
import {DELETE_ROUTE_MARKER} from '../../../shared/constants/modal-constants';
import {Route} from "@pages/main-screen/Route";
@Component({
	selector: 'app-routes-list',
	templateUrl: './routes-list.component.html',
	styleUrls: ['./routes-list.component.sass'],
})
export class RoutesListComponent implements OnInit {

	constructor() {}
	ROUTES_ON_MAP_COUNT = 3;
	@Input() activeRoutesCollection: Partial<Route>[];
	@Output() routeToDisplay = new EventEmitter<any>(); // TODO
	@Output() formData = new EventEmitter<any>();
	isChecked: boolean;

	ngOnInit() {
		this.isChecked = false;
	}

	parseDate(date: Date): string {
		return UtilsService.formatDate(date);
	}

	displayRoute(index: number) {
    if (index >= this.ROUTES_ON_MAP_COUNT) {
			this.isChecked = !this.isChecked;
			if (this.isChecked) {
				this.routeToDisplay.emit(index);
			} else {
				this.routeToDisplay.emit(DELETE_ROUTE_MARKER);
			}
		}
	}

	submitRoute(index: number) {
		console.log(this.activeRoutesCollection[index]);
	}

	getData(data: any) {
		this.formData.emit(data);
	}
}
