import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/card/card.component';
import { DishesComponent } from './Components/dishes/dishes.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
