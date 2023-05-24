import { Component } from '@angular/core';


@Component({
  selector: 'app-update-chief',
  templateUrl: './update-chief.component.html',
  styleUrls: ['./update-chief.component.css']
})
export class UpdateChiefComponent {

  image: string | undefined;
  aboutMe: string | undefined;
  userName: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  address: string | undefined;
}
