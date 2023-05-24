import { Component } from '@angular/core';
import{DishService}  from '../../services/dish.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-dishes',
  templateUrl: './update-dishes.component.html',
  styleUrls: ['./update-dishes.component.css']
})
export class UpdateDishesComponent {
  ID:any;
  dish:any;
  router: any;
 
  // constructor(myRoute:ActivatedRoute,public myService:DishService){
  //   this.ID= myRoute.snapshot.params["id"];
  // }
  // ngOnInit(): void {
  //   this.myService.getDishbyID(this.ID).subscribe(
  //     {
  //       next:(data)=>{
  //         console.log(data);
  //         this.dish = data;
  //       },
  //       error:(err)=>{console.log(err)}
  //     }
  //   );}
  //   update(){
  //     this.myService.updateDish(this.dish).subscribe(
  //       (data) => {
  //         console.log(data);
  //         this.router.navigate(['/dishs']);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  
  name : string | undefined;
  image: string | undefined;
  description: string | undefined;
  price: number | undefined;
  categories = ['Dessert', 'Savory'];
  selectedCategory: string = 'Dessert';
 
}
