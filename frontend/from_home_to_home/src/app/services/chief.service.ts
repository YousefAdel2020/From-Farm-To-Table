import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChiefService {
 

  constructor( private readonly myClient:HttpClient) {}

  private readonly Base_URL = "http://localhost:8000";
  getChiefs(): Observable<any> {
    const url = `${this.Base_URL}/api/v1/users`;
    return this.myClient.get(this.Base_URL);
  }

  getChiefbyID(id: string): Observable<any> {
    const url = `${this.Base_URL}/api/v1/users/${id}`;
    return this.myClient.get(url);
  }
  updateChief(id:any, data:any,token:any):Observable<any>{
    const url = `${this.Base_URL}/api/v1/user/${id}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.myClient.put(url,data, {headers});
  }

 
}
