import { Component } from '@angular/core';

@Component({
  selector: 'app-update-dishes',
  templateUrl: './update-dishes.component.html',
  styleUrls: ['./update-dishes.component.css']
})
export class UpdateDishesComponent {
 
  name : string | undefined;
  image: string | undefined;
  description: string | undefined;
  price: number | undefined;
  categories = ['Dessert', 'Savory'];
  selectedCategory: string = 'Dessert';
 
}
