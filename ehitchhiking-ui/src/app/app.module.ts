import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatSidenavModule, MatDialogModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './shared/components/menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MainScreenModule} from './pages/main-screen/main-screen.module';
import {ProfileModalComponent} from './shared/modals/profile-modal/profile-modal.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [AppComponent, MenuComponent, ProfileModalComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatSidenavModule,
		MatDialogModule,
		FormsModule,
		MatButtonModule,
		MainScreenModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
