import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainScreenComponent } from "./main-screen-component/main-screen.component";
import { MatButtonModule, MatButtonToggleModule } from "@angular/material";

@NgModule({
  declarations: [MainScreenComponent],
  imports: [CommonModule, MatButtonToggleModule, MatButtonModule],
  exports: [MainScreenComponent]
})
export class MainScreenModule {}
