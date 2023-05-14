import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';

const routes: Routes = [
  {path:'updateUser', component:UpdateUserComponent},
  {path:'viewUser', component:ProfileUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
