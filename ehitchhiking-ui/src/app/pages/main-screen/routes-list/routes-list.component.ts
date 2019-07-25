import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';
import {DELETE_ROUTE_MARKER} from '../../../shared/constants/modal-constants';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {ApiService} from '@shared/services/api.service';

@Component({
	selector: 'app-routes-list',
	templateUrl: './routes-list.component.html',
	styleUrls: ['./routes-list.component.sass'],
  providers: [ApiService],
})
export class RoutesListComponent implements OnInit {
	@Input() activeRoutesCollection: Partial<Route>[];
	@Output() routeToDisplay = new EventEmitter<any>(); // TODO
  @Output() formData = new EventEmitter<any>();
	isChecked: boolean;

  constructor(private apiService: ApiService) {
  }

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
    } else {
      this.routeToDisplay.emit(DELETE_ROUTE_MARKER);
    }
  }

  submitRoute(index: number) {
    const route = this.activeRoutesCollection[index];
    this.apiService
      .doPost(URL_REGISTRY['map.postRoute'], false, {
        from: route.from,
        to: route.to,
        date: route.departureDate,
        seats: route.placesSelect,
        idTrip: 1234,
        idUser: 1234,
      })
      .subscribe((data) => console.log(data));
  }

  getData(data: any) {
    this.formData.emit(data);
  }
}
