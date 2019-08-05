import {AuthorizationApiService} from './shared/services/api.services/authorization.api.service';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {MainScreenModule} from '@pages/main-screen/main-screen.module';
import {MenuModule} from '@shared/components/menu/menu.module';
import {RegistrationModule} from '@pages/registration/registration.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';
import {ApiService} from '@shared/services/api.services/api.service';
import {UserService} from '@shared/services/user.service';
import {AuthorizationService} from '@shared/services/authorization.service';
import {NotificationService} from '@shared/services/notification.service';
import {CachingInterceptor} from '@shared/services/interceptors/caching-interceptor';
import {RequestCache} from '@shared/services/request.cache.service';
import { ConfirmationModalComponent } from './shared/modals/confirmation-modal/confirmation-modal.component';

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
	providers: [
		ApiService,
		UserService,
		NotificationService,
		AuthorizationApiService,
		AuthorizationService,
		{provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true},
		{provide: RequestCache, useClass: RequestCache},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
