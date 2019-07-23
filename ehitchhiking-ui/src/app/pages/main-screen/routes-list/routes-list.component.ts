import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from '@shared/services/utils.service';

@Component({
	selector: 'app-routes-list',
	templateUrl: './routes-list.component.html',
	styleUrls: ['./routes-list.component.sass'],
})
export class RoutesListComponent implements OnInit {
	@Input() activeRoutesCollection: Partial<Route>[];

	constructor() {}

	ngOnInit() {}

	parseDate(date: Date): string {
		return UtilsService.formatDate(date);
	}
}
