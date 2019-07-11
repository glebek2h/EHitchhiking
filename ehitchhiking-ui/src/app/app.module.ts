import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
} from '@angular/material'
import {FormsModule} from '@angular/forms'
import {MenuComponent} from './shared/components/menu/menu.component'
import {MatButtonModule} from '@angular/material/button'
import {MainScreenModule} from './main-screen/main-screen.module'

@NgModule({
    declarations: [AppComponent, MenuComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatSidenavModule,
        FormsModule,
        MatButtonModule,
        MainScreenModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
