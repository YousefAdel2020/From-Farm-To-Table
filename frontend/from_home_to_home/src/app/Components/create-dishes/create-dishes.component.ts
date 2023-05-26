import { Component } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-dishes',
  templateUrl: './create-dishes.component.html',
  styleUrls: ['./create-dishes.component.css']
})
export class CreateDishesComponent {
  categories = ['Dessert', 'Savory'];
   selectedCategory: string = 'Dessert'

  createDishForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    ingredients: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    img: new FormControl(''),
    price: new FormControl(''),

  });

  constructor(private formBuilder: FormBuilder, private dishService: DishService, private router: Router) {}

  create(){
    console.log("clicked")
    let user = JSON.parse(localStorage.getItem("user") || '');
    let chef= user._id;
    let token = localStorage.getItem('token');
    console.log(token);
    let name= this.createDishForm.controls["name"].value;
    let description= this.createDishForm.controls["description"].value;
    let ingredients = this.createDishForm.controls["ingredients"].value;
    let category= this.createDishForm.controls["category"].value || 'Savory'
    let img= this.createDishForm.controls["img"].value || "img.jpg";
    let price= this.createDishForm.controls["price"].value;


    let data = {
      name,
      description,
      ingredients,
      category,
      img,
      price,
      chef
    }
    console.log(data);

    this.dishService.AddNewdish(data, token).subscribe(response=>{
      console.log(response)
      this.router.navigate(['/dishes'])
    })
   
   }




  
   }
