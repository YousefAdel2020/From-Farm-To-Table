import { Component } from '@angular/core';

@Component({
  selector: 'app-details-dish',
  templateUrl: './details-dish.component.html',
  styleUrls: ['./details-dish.component.css']
})
export class DetailsDishComponent {
  topDishes = ['dish1' , 'dish2', "dish3","dish4"];

  title = 'Seafood Dish  ';
  content = 'Seafood represents a diverse range of food .There are all kinds of different seafood, and they are some of the most nutritious foods/Seafood represents a diverse range of food that includes fish, shellfish, and sea vegetables./Seafood represents a diverse range of food that includes fish, shellfish, and sea vegetables.Seafood represents a diverse range of food that includes fish, shellfish, and sea vegetables.Seafood represents a diverse range of food  ';
  // @Input() title!: string;
  // @Input() content!: string;


}
