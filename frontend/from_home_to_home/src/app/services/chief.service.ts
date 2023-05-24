import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChiefService {
 

  constructor( private readonly myClient:HttpClient) {}

  private readonly Base_URL = "http://localhost:3000";
  getChiefs(): Observable<any> {
    const url = `${this.Base_URL}/api/v1/chief/chiefs`;
    return this.myClient.get(this.Base_URL);
  }

  getChiefbyID(id: string): Observable<any> {
    const url = `${this.Base_URL}/api/v1/chief/:id`;
    return this.myClient.get(url);
  }
  updateChief(chief:any):Observable<any>{
    const url = `${this.Base_URL}/api/v1/chief/update/:id`;
    return this.myClient.put(url,chief);
  }


 
}
