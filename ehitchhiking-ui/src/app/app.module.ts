import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatDialogModule,
  MatDialogRef,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './shared/components/menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MainScreenModule} from './main-screen/main-screen.module';
import { BlacklistComponent } from './shared/components/blacklist/blacklist.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BlacklistComponent,
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
    MatDialogModule,
  ],
  entryComponents: [
    BlacklistComponent,
  ],
  providers: [MatDialogRef],
  bootstrap: [AppComponent]
})
export class AppModule {}
