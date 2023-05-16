import { Component } from '@angular/core';


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {
  userName = 'John_Doe';
  email = 'john@example.com';
  phoneNumber = '(239) 816-9029';
  Address = 'Bay Area, San Francisco, CA';

 
  
}
