import {AuthorizationGuard} from '@shared/guards/authorization.guard';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainScreenComponent} from '@pages/main-screen/main-screen-component/main-screen.component';
import {RegistrationComponent} from '@pages/registration/registration.component';

const routes: Routes = [
	{path: 'main', component: MainScreenComponent, canActivate: [AuthorizationGuard]},
	{path: '', redirectTo: '/main', pathMatch: 'full'},
	{path: 'login', component: RegistrationComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [AuthorizationGuard],
})
export class AppRoutingModule {}
