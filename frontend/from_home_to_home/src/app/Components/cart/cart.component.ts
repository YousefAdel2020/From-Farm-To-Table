import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
 title!:any;
 description!:any;
 price!:any;
 dishes:any;
 isEmpty!:boolean;

 constructor(private cartService:CartService){}
 
 ngOnInit(){
    this.getCart();
 }

 getCart(){
  this.cartService.getCart().subscribe(response=>{
    console.log(response.cart);
    if(response.cart.length != 0 ){
      this.dishes =response.cart;
    }else{
     this.isEmpty=true;
    }
  })
 }

 clearCart(){
  this.cartService.clearCart().subscribe(response=>{
    console.log(response)
  })
 }

 removeFromCart(dishId:any){
   this.cartService.removeFromCart(dishId).subscribe(response=>{
    console.log(response)
    window.location.reload();
   })
 }
}
