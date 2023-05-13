import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfileChiefComponent } from './components/profile-chief/profile-chief.component';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RatingStarComponent } from './components/rating-star/rating-star.component';
import { UpdateChiefComponent } from './components/update-chief/update-chief.component';


import { CardComponent } from './Components/card/card.component';
import { DishesComponent } from './Components/dishes/dishes.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';


@NgModule({
  declarations: [
    AppComponent,

    ProfileChiefComponent,
    RatingStarComponent,
    UpdateChiefComponent

   

    CardComponent,
    DishesComponent,
    LoginFormComponent,
    RegisterPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxStarRatingModule,
    FormsModule,

    BrowserAnimationsModule,
    MatIconModule,
  
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
