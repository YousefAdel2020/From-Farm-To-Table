import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post('http://localhost:8000/api/v1/auth/login', { email, password });
  }
  register(data:any){
    return this.http.post('http://localhost:8000/api/v1/auth/register', data)
  }


getUser(token: string): Observable<any> {
    var header = {
        headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
      }
      console.log("ana hennna")
    return this.http.get('http://localhost:8000/api/v1/users', header);
  }

}