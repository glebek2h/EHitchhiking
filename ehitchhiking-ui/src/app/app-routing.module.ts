import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainScreenComponent} from './main-screen/main-screen-component/main-screen.component';


const routes: Routes = [
  { path: 'main', component: MainScreenComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
