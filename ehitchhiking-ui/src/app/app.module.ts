import {ApiService} from '@shared/services/api.services/api.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainScreenModule} from '@pages/main-screen/main-screen.module';
import {MenuModule} from '@shared/components/menu/menu.module';
import {RegistrationModule} from '@pages/registration/registration.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';
import {UserService} from '@shared/services/user.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MainScreenModule,
		MenuModule,
		RegistrationModule,
		HttpClientModule,
		MatNativeDateModule,
	],
	providers: [ApiService, UserService],
	bootstrap: [AppComponent],
})
export class AppModule {}
