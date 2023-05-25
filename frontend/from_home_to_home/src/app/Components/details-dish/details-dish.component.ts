import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-details-dish',
  templateUrl: './details-dish.component.html',
  styleUrls: ['./details-dish.component.css']
})
export class DetailsDishComponent implements OnInit {
  productId: any;
  name!:string;
  description!:string;
  price!:any;
  ingredients!:string;


  constructor(private route: ActivatedRoute, private dishService: DishService) {}
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.dishService.getDishByID(this.productId).subscribe(response=>{
       this.description=response.dish.description;
       this.name= response.dish.name;
       this.price = response.dish.price;
       this.ingredients = response.dish.ingredients[0];
    })
  }
  // topDishes = ['dish1' , 'dish2', "dish3","dish4"];

  // title = 'Seafood Dish  ';
  // content = 'Seafood represents a diverse range of food .There are all kinds of different seafood, and they are some of the most nutritious foods/Seafood represents a diverse range of food that includes fish, shellfish, and sea vegetables./Seafood represents a diverse range of food that includes fish, shellfish, and sea vegetables.Seafood represents a diverse range of food that includes fish, shellfish, and sea vegetables.Seafood represents a diverse range of food  ';
  // // @Input() title!: string;
  // @Input() content!: string;


}
