import {MenuModule} from './shared/components/menu/menu.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatSidenavModule, MatIconModule, MatButtonModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MainScreenModule} from './pages/main-screen/main-screen.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatSidenavModule,
		FormsModule,
		MainScreenModule,
		MenuModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
