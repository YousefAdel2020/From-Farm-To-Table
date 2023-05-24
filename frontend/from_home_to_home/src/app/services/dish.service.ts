import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DishService {


  constructor( private readonly myClient:HttpClient) {}

  private readonly Base_URL = "http://localhost:3000";
  getDishs(): Observable<any> {
    const url = `${this.Base_URL}/api/dish/dishs`;
    return this.myClient.get(this.Base_URL);
  }

  getDishbyID(id: any): Observable<any> {
    const url = `${this.Base_URL}/api/dish/:id`;
    return this.myClient.get(url,id);
  }
  updateDish(dish:any){
    const url = `${this.Base_URL}/api/dish/update/:id`;
    return this.myClient.put(url,dish);
  }
  AddNewdish(newdish:any){
    const url = `${this.Base_URL}/api/dish/create`;
    return this.myClient.post(url, newdish);
  }
  deleteDish(id:any){
    const url = `${this.Base_URL}/api/dish/delete/:id`;
    return this.myClient.delete(url,id);
  }

}
