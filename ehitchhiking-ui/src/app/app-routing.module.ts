import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './shared/components/menu/menu.component';
import {MainScreenComponentComponent} from './main-screen/main-screen-component/main-screen-component.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'main-screen', component: MainScreenComponentComponent },
  { path: '', redirectTo: '/main-screen', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
