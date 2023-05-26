import { Component, OnInit } from '@angular/core';
import { DishService} from '../../services/dish.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-dishes',
  templateUrl: './update-dishes.component.html',
  styleUrls: ['./update-dishes.component.css']
})
export class UpdateDishesComponent implements OnInit {
categories = ['Dessert', 'Savory'];
  selectedCategory: string = 'Dessert';
  category!:string;
  description!: string;
  name!: string;
  price!: string;
  ingredients!: string;
  dishId: string | null = null;
  dishForm!: FormGroup;
  Dish:any;
  constructor(private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private dishService: DishService) {}

  ngOnInit(): void {
    this.dishId = this.route.snapshot.paramMap.get('dishId');
    console.log(this.dishId);
    this.dishService.getDishByID(this.dishId).subscribe(response=>{
      this.description=response.dish.description;
      this.category=response.dish.category;
      this.name= response.dish.name;
      this.price = response.dish.price;
      this.ingredients = response.dish.ingredients[0];
   })
    
  }

   updateDish() {
  
   }

  resetForm() {
    // Reset the form fields to their default values
    this.dishForm.reset({
      category: 'Dessert'
    });
  }
}
