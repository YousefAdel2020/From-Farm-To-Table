import { Component ,OnInit} from '@angular/core';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  img!: string;
  cart!: any[];
  Name!: string;
  email!: string;
  role!: string;
  gender!: string;
  address!: string;
  phoneNumber!: string;
  products: any;
  dishService: any;
  ngOnInit(): void {

    
    // retrieve the user object from local storage
    let user = localStorage.getItem("user");
 
    if (user) {
      // parse the user object into a JavaScript object
      const userData = JSON.parse(user);

      // assign corresponding values from the user object to variables in the component
      // this.img = userData.img;
      this.cart = userData.cart;
      this.Name = userData.firstName + userData.lastName;
      this.email = userData.email;
      this.gender = userData.gender;
      this.address = userData.address;
      this.phoneNumber = "01274808878";

   
       
    }
    
    }
    
 
  
}
