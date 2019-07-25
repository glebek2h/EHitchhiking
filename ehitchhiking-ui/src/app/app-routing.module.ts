import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainScreenComponent} from '@pages/main-screen/main-screen-component/main-screen.component';
import {RegistrationComponent} from '@pages/registration/registration.component';
import {AuthorizationGuard} from "@shared/guards/authorization.guard";

const routes: Routes = [
  {path: 'main', component: MainScreenComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full', canActivate: [AuthorizationGuard]},
  {path: 'login', component: RegistrationComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [AuthorizationGuard],
})
export class AppRoutingModule {}
