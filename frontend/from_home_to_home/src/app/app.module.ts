import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileChiefComponent } from './components/profile-chief/profile-chief.component';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RatingStarComponent } from './components/rating-star/rating-star.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileChiefComponent,
 

    RatingStarComponent
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
