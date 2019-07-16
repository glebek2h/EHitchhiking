import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MainScreenModule} from './pages/main-screen/main-screen.module';
import {RatePassengersModalModule} from './shared/components/rate-passengers-modal/rate-passengers-modal.module';
import {RegistrationModule} from './pages/registration/registration.module';

@NgModule({
	declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MainScreenModule,
    RegistrationModule,
    RatePassengersModalModule,
  ],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
