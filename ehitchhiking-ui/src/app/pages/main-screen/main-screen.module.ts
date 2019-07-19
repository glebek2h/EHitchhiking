import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScreenComponent} from './main-screen-component/main-screen.component';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule, MatInputModule, MatSelectModule,
} from '@angular/material';
import {YandexMapComponent} from './yandex-map/yandex-map.component';

import {TripRegistrationComponent} from './trip-registration/trip-registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { RoutesListComponent } from './routes-list/routes-list.component';
@NgModule({
	declarations: [
		MainScreenComponent,
		YandexMapComponent,
		TripRegistrationComponent,
		RoutesListComponent,
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
    MatExpansionModule
  ],
	exports: [MainScreenComponent, TripRegistrationComponent],
})
export class MainScreenModule {}
