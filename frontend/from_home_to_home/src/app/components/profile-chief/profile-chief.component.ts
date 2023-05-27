import { Component, OnInit } from '@angular/core';
import { DishService} from '../../services/dish.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-profile-chief',
  templateUrl: './profile-chief.component.html',
  styleUrls: ['./profile-chief.component.css']
})
export class ProfileChiefComponent implements OnInit{

  img!: string;
  cart!: any[];
  Name!: string;
  email!: string;
  role!: string;
  gender!: string;
  address!: string;
  phoneNumber!: string;
  products: any;
  id!: string;
  
  constructor(private dishService: DishService) {}
 
  ngOnInit(): void {

    
    // retrieve the user object from local storage
    let user = localStorage.getItem("user");
 
    if (user) {
      // parse the user object into a JavaScript object
      const userData = JSON.parse(user);

      // assign corresponding values from the user object to variables in the component
      // this.img = userData.img;
      this.id = userData._id;
      this.cart = userData.cart;
      this.Name = userData.firstName + userData.lastName;
      this.email = userData.email;
      this.gender = userData.gender;
      this.address = userData.address;
      this.phoneNumber = "01274808878";

      this.dishService.getDishes().subscribe(response=>{
        this.products = response.dishes.filter((dish: any) => dish.chef._id === userData._id);
        console.log(this.products);
       })
    }
    
    }
    
  deleteDish(id: any) {
    let token = localStorage.getItem('token');
    console.log(id);
    this.dishService.deleteDish(id,token).subscribe(data => {
      this.products = this.products.filter((dish: any) => dish._id !== id);
    });
  }

  }
  


 
  

