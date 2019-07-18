import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainScreenComponent} from './pages/main-screen/main-screen-component/main-screen.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import { TripsComponent } from "./shared/components/trips/trips.component";

const routes: Routes = [
	{path: 'main', component: MainScreenComponent},
	{path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'login', component: RegistrationComponent },
  {path: 'history-trips', component: TripsComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
