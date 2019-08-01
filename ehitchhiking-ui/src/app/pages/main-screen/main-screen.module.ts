import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScreenComponent} from './main-screen-component/main-screen.component';
import {
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatTooltipModule,
} from '@angular/material';
import {YandexMapComponent} from './yandex-map/yandex-map.component';

import {TripRegistrationComponent} from './trip-registration/trip-registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {RoutesListComponent} from './routes-list/routes-list.component';
import {MenuModule} from '../../shared/components/menu/menu.module';
import {FiltersComponent} from './filters/filters.component';
import {ActiveTripsMapService} from "@shared/services/active-trips-map.service";

@NgModule({
	declarations: [
		MainScreenComponent,
		YandexMapComponent,
		TripRegistrationComponent,
		RoutesListComponent,
		FiltersComponent,
	],
	imports: [
		CommonModule,
		MatButtonToggleModule,
		MatButtonModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatInputModule,
		MatDatepickerModule,
		MatSelectModule,
		NgxMaterialTimepickerModule,
		MatExpansionModule,
		MenuModule,
		MatCheckboxModule,
		MatTooltipModule,
	],
  providers: [ActiveTripsMapService],
	exports: [MainScreenComponent, TripRegistrationComponent],
})
export class MainScreenModule {}
