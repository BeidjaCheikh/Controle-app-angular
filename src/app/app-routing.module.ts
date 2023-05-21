import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OwnersComponent} from "./owners/owners.component";
import {VehiclesComponent} from "./vehicles/vehicles.component";
import {RadarsComponent} from "./radars/radars.component";
import {VehiclownerComponent} from "./vehiclowner/vehiclowner.component";
import {InfractionsComponent} from "./infractions/infractions.component";


const routes: Routes = [
  {
    path:"owners", component : OwnersComponent
  },
  {
    path:"vehicles", component : VehiclesComponent
  },
  {
    path:"radars", component : RadarsComponent
  },
  {
    path:"owners-vehicles/:ownerId", component : VehiclownerComponent
  },
  {
    path:"radars",component :RadarsComponent
  },
  {
    path:"infractions",component :InfractionsComponent
  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
