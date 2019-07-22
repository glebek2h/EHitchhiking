import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';

@Component({
	selector: 'app-routes-list',
	templateUrl: './routes-list.component.html',
	styleUrls: ['./routes-list.component.sass'],
})
export class RoutesListComponent implements OnInit {
	@Input() activeRoutesCollection: Partial<Route>[];
	@Output() routeToDisplay = new EventEmitter<any>(); // TODO
	isChecked: boolean;

	constructor() {}

	ngOnInit() {
	  this.isChecked = false;
  }

	parseDate(date: Date): string {
		return UtilsService.formatDate(date);
	}

  displayRoute(index: number) {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.routeToDisplay.emit(index);
    }
    else {
      this.routeToDisplay.emit(-99);
    }
  }

  submitRoute(index: number) {
    console.log(this.activeRoutesCollection[index]);
  }

}
