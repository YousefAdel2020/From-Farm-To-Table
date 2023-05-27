import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService{


  constructor( private readonly myClient:HttpClient) {}

  private readonly Base_URL = "http://localhost:8000/api/v1/cart/";
  private token = localStorage.getItem('token');
  addToCart(dishId:any, token:any):Observable<any>{
    this.token = token;
    console.log(dishId);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    let data = {
        dishId
    }
    return this.myClient.post(this.Base_URL, data, {headers})
     
  }

  getCart():Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.myClient.get(this.Base_URL, {headers})
  }

  clearCart():Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.myClient.delete(`${this.Base_URL}/clear`, {headers})
  }
  removeFromCart(dishId:any):Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
   
    return this.myClient.put( `${this.Base_URL}/${dishId}`,{dishId},{headers})
  }


}
