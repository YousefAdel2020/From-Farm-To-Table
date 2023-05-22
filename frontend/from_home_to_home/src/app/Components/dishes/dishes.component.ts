import { Component } from '@angular/core';
import { DishService} from '../../services/dish.service';
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {
  public filterdish!: string;
  
   products = [
    {id: 1, category: 'Fast', name: 'Pasta', content: 'love pasta', price: 10},
    {id: 2, category: 'Fast', name: 'Pizza', content: 'love pizza', price: 12},
    {id: 3, category: 'Fast', name: 'PizzaItaly', content: 'love pizza', price: 12},
    {id: 4, category: 'Fast', name: 'Burger', content: 'love burger', price: 8},
    {id: 5, category: 'Healthy', name: 'Salad', content: 'love salad', price: 6},
    {id: 6, category: 'Healthy', name: 'Salad', content: 'love salad', price: 6},
    {id: 7, category: 'Healthy', name: 'Salad', content: 'love salad', price: 6},
    {id: 8, category: 'Healthy', name: 'Salad', content: 'love salad', price: 6}
  ];
  filteredProducts =this.products;
 
 
  applyFilters() {
    
    
    let temp = this.products;
    this.filteredProducts=[];
      // Loop through each product in the original array
      for (const product of this.products) {

       if (product.name.toLowerCase().includes(this.filterdish.toLowerCase()) || product.category.toLowerCase().includes(this.filterdish.toLowerCase())) {
        this.filteredProducts.push(product);
        
      }
      }
      
      temp =this.filteredProducts;
      
  }
  }

