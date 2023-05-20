import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RadarsComponent } from './radars/radars.component';
import { InfractionsComponent } from './infractions/infractions.component';
import { VehiclownerComponent } from './vehiclowner/vehiclowner.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    VehiclesComponent,
    RadarsComponent,
    InfractionsComponent,
    VehiclownerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
