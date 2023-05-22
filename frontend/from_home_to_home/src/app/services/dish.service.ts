import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  private apiUrl = '/dishes';
  constructor(private http: HttpClient) {
  //   GetAllProducts(){
  //     return this.http.get(this.apiUrl);
  //  }
  
  
}
}
