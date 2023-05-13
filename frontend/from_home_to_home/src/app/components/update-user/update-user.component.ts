import { Component } from '@angular/core';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  image: string | undefined;
  aboutMe: string | undefined;
  userName: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  address: string | undefined;
}
