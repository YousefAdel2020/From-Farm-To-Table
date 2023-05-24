import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  private readonly Base_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  
  loginUser(user: any) {
    return this.http.post(`${this.Base_URL}/api/v1/login`, user);
  }
  logout(): void {
    localStorage.clear();
  }
}
