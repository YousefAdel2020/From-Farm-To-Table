import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateChiefComponent } from './Components/update-chief/update-chief.component';
import { ProfileChiefComponent } from './Components/profile-chief/profile-chief.component';
import{DishesComponent} from './Components/dishes/dishes.component';
const routes: Routes = [
  {path:'updateChief', component:UpdateChiefComponent},
  {path:'viewChief', component:ProfileChiefComponent},
  {path:'dishes', component:DishesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
