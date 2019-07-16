import {NgModule} from '@angular/core';
import {RegistrationComponent} from "./registration.component";
import {MatButtonModule} from "@angular/material";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    MatButtonModule,
    AppRoutingModule,
    FormsModule,],
  entryComponents: [RegistrationComponent],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
