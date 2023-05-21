import { Component } from '@angular/core';

@Component({
  selector: 'app-create-dishes',
  templateUrl: './create-dishes.component.html',
  styleUrls: ['./create-dishes.component.css']
})
export class CreateDishesComponent {
  name: string | undefined;
  image: string | undefined;
  description: string | undefined;
  price: number | undefined;
 
}
