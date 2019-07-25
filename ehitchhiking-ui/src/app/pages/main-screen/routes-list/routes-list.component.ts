import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';
import {DELETE_ROUTE_MARKER} from '../../../shared/constants/modal-constants';

@Component({
	selector: 'app-routes-list',
	templateUrl: './routes-list.component.html',
	styleUrls: ['./routes-list.component.sass'],
})
export class RoutesListComponent implements OnInit {
	@Input() activeRoutesCollection: Partial<Route>[];
  @Input() isDisabledSubmitRouteButton: boolean;
	@Output() routeToDisplay = new EventEmitter<any>(); // TODO
  @Output() formData = new EventEmitter<any>();
	isChecked: boolean;

	constructor() {}

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
    //console.log(this.activeRoutesCollection[index]);
  }

  getData(data: any) {
	  this.formData.emit(data);
  }
}
