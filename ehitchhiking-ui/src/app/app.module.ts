import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainScreenModule} from './pages/main-screen/main-screen.module';
import {MenuModule} from './shared/components/menu/menu.module';
import {RatePassengersModalModule} from './shared/components/rate-passengers-modal/rate-passengers-modal.module';
import {RegistrationModule} from './pages/registration/registration.module';
import { MatIconModule, MatNativeDateModule } from "@angular/material";
import { PreLoadingModule } from "./shared/components/pre-loading/pre-loading.module";
import { NoDataModule } from "./shared/components/no-data/no-data.module";
import { ActiveTripAdditionalInfoComponent } from './shared/components/active-trip-additional-info/active-trip-additional-info.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainScreenModule,
    MenuModule,
    RegistrationModule,
    RatePassengersModalModule,
    MatNativeDateModule,
    MatIconModule,
    PreLoadingModule,
    NoDataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule {}
