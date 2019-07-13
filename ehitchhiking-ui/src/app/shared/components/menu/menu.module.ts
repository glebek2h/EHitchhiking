import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
