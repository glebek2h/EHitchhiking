import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MainScreenModule} from './pages/main-screen/main-screen.module';
import {MenuModule} from './shared/components/menu/menu.module';
import {RatePassengersModalModule} from './shared/components/rate-passengers-modal/rate-passengers-modal.module';
import {MenuComponent} from './shared/components/menu/menu.component';
import { RegistrationComponent } from './shared/components/registration/registration.component';
import {MatButtonModule} from "@angular/material";



@NgModule({
	declarations: [AppComponent, RegistrationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MainScreenModule,
    MenuModule,
    RatePassengersModalModule,
    MatButtonModule,
  ],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
