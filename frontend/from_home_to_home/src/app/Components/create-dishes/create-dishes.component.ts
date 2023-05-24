import { Component } from '@angular/core';
import { Router} from '@angular/router';
import{DishService}  from '../../services/dish.service';
@Component({
  selector: 'app-create-dishes',
  templateUrl: './create-dishes.component.html',
  styleUrls: ['./create-dishes.component.css']
})
export class CreateDishesComponent {
  // constructor(private myService:DishService,private router:Router){  }

  // Add(name:any,categories:any,description:any,ingredients:any,image:any,price:any,){
  //   let newdish = {name, categories, description, ingredients, image, price};
  //   this.myService.AddNewdish(newdish).subscribe();
  //   // go to page student
  //   this.router.navigate(['/dishs']);
  // }
  name: string | undefined;
  image: string | undefined;
  description: string | undefined;
  price: number | undefined;
   categories = ['Dessert', 'Savory'];
   selectedCategory: string = 'Dessert';
}
