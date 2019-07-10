import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponentComponent } from './main-screen-component/main-screen-component.component';
import {MatButtonModule, MatButtonToggleModule} from '@angular/material';



@NgModule({
  declarations: [MainScreenComponentComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  exports: [
    MainScreenComponentComponent
  ]
})
export class MainScreenModule { }
