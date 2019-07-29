import {ApiService} from '@shared/services/api.service';
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
import {CachingInterceptor} from '@shared/services/interceptors/caching-interceptor';
import {RequestCache} from '@shared/services/request.cache.service';

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
    {provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true},
    {provide: RequestCache, useClass: RequestCache},
  ],
	bootstrap: [AppComponent],
})
export class AppModule {}
