import { Component } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {
  public nameFilter!: string;

  public products = [
    {id: 1, name: 'Pasta', content:'love pasta',price: 10},
    {id: 2, name: 'Pizza', content:'love pizaa', price: 12},
    {id: 3, name: 'Burger',content:'love pizaa', price: 8},
    {id: 4, name: 'Salad',content:'love pizaa', price: 6},
    {id: 5, name: 'Salad',content:'love pizaa', price: 6},
    {id: 6, name: 'Salad',content:'love pizaa', price: 6},
    {id: 7, name: 'Salad',content:'love pizaa', price: 6}
  ];
 
}
