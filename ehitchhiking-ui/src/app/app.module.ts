import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainScreenModule} from './pages/main-screen/main-screen.module';
import {MenuModule} from './shared/components/menu/menu.module';
import {RatePassengersModalModule} from './shared/components/rate-passengers-modal/rate-passengers-modal.module';
import {RegistrationModule} from './pages/registration/registration.module';
import { RegistrationModule } from "./pages/registration/registration.module";
import { TripsModule } from "./shared/components/trips/trips.module";
import { TripModule } from "./shared/components/trip/trip.module";

@NgModule({
	declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MainScreenModule,
    MenuModule,
    RegistrationModule,
    RatePassengersModalModule,
    TripsModule,
    TripModule
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MainScreenModule,
		MenuModule,
		RegistrationModule,
		RatePassengersModalModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
