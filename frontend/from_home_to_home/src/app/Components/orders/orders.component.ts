import { Component, OnInit} from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  ordersHolder!:any;
  orders!:any;
  dishes!:any;

  constructor(private orderService:OrdersService){}
    
  ngOnInit(){
     this.getOrders();
  }

getOrders(){
  let user = JSON.parse(localStorage.getItem('user') || '');
  let userId= user._id;
  this.orderService.getAllOrders().subscribe(response=>{
  this.ordersHolder= response;
  if(this.ordersHolder.orders !=0){
      this.orders= this.ordersHolder.orders;
      console.log(this.orders);
  }
  
})
}
 

}
