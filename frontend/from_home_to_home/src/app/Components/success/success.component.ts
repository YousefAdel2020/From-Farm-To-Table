import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit{
 
   
    constructor(private orderService:OrdersService){}
    
    ngOnInit(){
       this.Order();
    }

    Order(){
      let user = JSON.parse(localStorage.getItem('user') || '');
      let userId= user._id;
      this.orderService.placeOrder(userId).subscribe(response=>{
        console.log(response)
      })
    }
   

}
