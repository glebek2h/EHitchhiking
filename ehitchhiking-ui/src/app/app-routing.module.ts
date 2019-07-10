import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainScreenComponentComponent} from './main-screen/main-screen-component/main-screen-component.component';


const routes: Routes = [
  { path: 'main', component: MainScreenComponentComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
