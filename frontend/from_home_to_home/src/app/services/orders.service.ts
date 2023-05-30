import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
    private readonly Base_URL = "http://localhost:8000/api/v1/orders";
    private token = localStorage.getItem('token');

    constructor( private readonly myClient:HttpClient) {}

  checkout(userId:any){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.myClient.post(`${this.Base_URL}/checkout`, {userId},{headers})
}
placeOrder(userId:any){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.myClient.post(`${this.Base_URL}`, {userId},{headers})
}

getAllOrders(){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.myClient.get(`${this.Base_URL}`,{headers})
}

}