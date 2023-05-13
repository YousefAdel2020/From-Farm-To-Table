import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ProfileChiefComponent } from './components/profile-chief/profile-chief.component';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RatingStarComponent } from './Components/rating-star/rating-star.component';
import { UpdateChiefComponent } from './components/update-chief/update-chief.component';


import { CardComponent } from './Components/card/card.component';
import { DishesComponent } from './Components/dishes/dishes.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { HomeDishesComponent } from './Components/home/home-dishes/home-dishes.component';

let routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path: "register", component:RegisterPageComponent},
  {path:"login", component:LoginFormComponent}
]


@NgModule({
  declarations: [
    AppComponent,

    ProfileChiefComponent,
    RatingStarComponent,
    UpdateChiefComponent,

   

    CardComponent,
    DishesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterPageComponent,
    HomeDishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    // NgxStarRatingModule,
    FormsModule,

    BrowserAnimationsModule,
    MatIconModule,
  
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
