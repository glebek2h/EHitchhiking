import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatIconModule, MatMenuModule, MatSidenavModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './shared/components/menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MainScreenModule} from './main-screen/main-screen.module';
import {RatePassangScreenComponent} from './shared/components/rate-passang-screen/rate-passang-screen.component';
import { RatingComponent } from './shared/components/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RatePassangScreenComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MainScreenModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
