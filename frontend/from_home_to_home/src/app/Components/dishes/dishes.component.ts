import { Component, OnInit } from '@angular/core';
import { DishService} from '../../services/dish.service';
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  products:any;
  filteredProducts:any;

  constructor(private dishService: DishService) {}
  ngOnInit(): void {
      
    this.dishService.getDishes().subscribe(response=>{
      this.products = response.dishes;
      this.filteredProducts = this.products
    })
  }
   public filterdish!: string;

 
 
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

