import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

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
 checkoutURL!:any;

 constructor(private cartService:CartService, private orderService:OrdersService){}
 
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
  console.log(dishId);
   this.cartService.removeFromCart(dishId).subscribe(response=>{
    console.log(response)
    window.location.reload();
   })
 }

 checkout(){
  let user= JSON.parse(localStorage.getItem('user') || '');
  let userId= user._id;
  console.log(userId);
  if(userId){
    this.orderService.checkout(userId).subscribe(response=>{
     this.checkoutURL = response;
     if(this.checkoutURL.url){
      window.location.href = this.checkoutURL.url;
     }
    })
  }

 }
}
