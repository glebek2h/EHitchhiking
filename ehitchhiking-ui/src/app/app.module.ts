import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './shared/components/menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MainScreenModule} from './pages/main-screen/main-screen.module';
import {RatePassangersModalComponent} from './shared/components/rate-passangers-modal/rate-passangers-modal.component';
import { RatingComponent } from './shared/components/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RatePassangersModalComponent,
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
    MatDialogModule
  ],
  entryComponents: [
    RatePassangersModalComponent, // todo: move RatePassangersModalComponent to separate module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
