import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainScreenComponent} from '@pages/main-screen/main-screen-component/main-screen.component';
import {RegistrationComponent} from '@pages/registration/registration.component';
import {AuthorizationGuard} from '@shared/guards/authorization.guard';

const routes: Routes = [
	{path: '', redirectTo: '/main', pathMatch: 'full'},
	{path: 'main', component: MainScreenComponent, canActivate: [AuthorizationGuard]},
	{path: 'login', component: RegistrationComponent, canActivate: [AuthorizationGuard]},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [AuthorizationGuard],
})
export class AppRoutingModule {}
