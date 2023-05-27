import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DishService {


  constructor( private readonly myClient:HttpClient) {}

  private readonly Base_URL = "http://localhost:8000";
  getDishes(): Observable<any> {
    const url = `${this.Base_URL}/api/v1/dishes`;
    return this.myClient.get(url);
  }

  getDishByID(id: any): Observable<any> {
    const url = `${this.Base_URL}/api/v1/dishes/${id}`;
    return this.myClient.get(url);
  }
  updateDish(id:any,data:any, token: any):Observable<any>{
    const url = `${this.Base_URL}/api/v1/dishes/${id}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.myClient.put(url,data,{ headers });
  }

  AddNewdish(newdish: any, token: any): Observable<any> {
    const url = `${this.Base_URL}/api/v1/dishes`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.myClient.post(url, newdish, { headers });
}
deleteDish(id: any, token: any): Observable<any> {
  const url = `${this.Base_URL}/api/v1/dishes/${id}`;
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.myClient.delete(url, { headers });
}

}
