import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { ProfileUserComponent } from './Components/profile-user/profile-user.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';

import { ProfileChiefComponent } from './Components/profile-chief/profile-chief.component';

import { RatingStarComponent } from './Components/rating-star/rating-star.component';

import { UpdateChiefComponent } from './Components/update-chief/update-chief.component';
import { CardComponent } from './Components/card/card.component';
import { DishesComponent } from './Components/dishes/dishes.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';


import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';


import { HomeDishesComponent } from './Components/home/home-dishes/home-dishes.component';
import { CreateDishesComponent } from './Components/create-dishes/create-dishes.component';
import { UpdateDishesComponent } from './Components/update-dishes/update-dishes.component';






import { DetailsDishComponent } from './Components/details-dish/details-dish.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';




let routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path: "register", component:RegisterPageComponent},
  {path:"login", component:LoginFormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ProfileUserComponent,
    UpdateUserComponent,
    ProfileChiefComponent,
    RatingStarComponent,
    CardComponent,
    DishesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterPageComponent,
    HomeDishesComponent,

    UpdateChiefComponent,
    CreateDishesComponent,
    UpdateDishesComponent,
   

    DetailsDishComponent,
    CartComponent,
    CheckoutComponent,
    ContactUsComponent


  ],
  

  
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot(routes),

    // NgxStarRatingModule,
    FormsModule,
 // NgxStarRatingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
