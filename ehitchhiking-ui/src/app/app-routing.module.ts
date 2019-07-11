import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './shared/components/registration/registration.component';


const routes: Routes = [
  { path: 'login', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
