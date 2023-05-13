import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/card/card.component';
import { DishesComponent } from './Components/dishes/dishes.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';

let routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path: "register", component:RegisterPageComponent},
  {path:"login", component:LoginFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DishesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
