import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  private loggedInUser: any;
  isLogged = localStorage.getItem('token') ? true : false;

  logout(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  //  ngOnInit(): void {
  //   if(localStorage.getItem('user')){
  //     let user = localStorage.getItem('user') || '';
  //     this.loggedInUser= JSON.parse(user)
  //    }
  //  }
}
