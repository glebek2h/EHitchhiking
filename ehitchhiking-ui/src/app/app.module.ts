import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './shared/components/menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MainScreenModule} from './main-screen/main-screen.module';
import { RegistrationComponent } from './shared/components/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MainScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
