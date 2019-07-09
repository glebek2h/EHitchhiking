import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponentComponent } from './main-screen-component/main-screen-component.component';



@NgModule({
  declarations: [MainScreenComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainScreenComponentComponent
  ]
})
export class MainScreenModule { }
