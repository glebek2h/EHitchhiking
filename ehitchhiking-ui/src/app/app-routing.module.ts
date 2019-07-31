import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainScreenComponent} from '@pages/main-screen/main-screen-component/main-screen.component';
import {AuthorizationGuard} from '@shared/guards/authorization.guard';
import {RegistrationComponent} from '@pages/registration/registration.component';
import {LoginGuard} from '@shared/guards/login.guard';

const routes: Routes = [
	{path: '', redirectTo: '/main', pathMatch: 'full'},
	{path: 'main', component: MainScreenComponent, canActivate: [AuthorizationGuard]},
	{path: 'login', component: RegistrationComponent, canActivate: [LoginGuard]},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [AuthorizationGuard, LoginGuard],
})
export class AppRoutingModule {}
