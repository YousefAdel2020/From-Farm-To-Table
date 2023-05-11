import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateChiefComponent } from './components/update-chief/update-chief.component';
import { ProfileChiefComponent } from './components/profile-chief/profile-chief.component';

const routes: Routes = [
  {path:'updateChief', component:UpdateChiefComponent},
  {path:'viewChief', component:ProfileChiefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
