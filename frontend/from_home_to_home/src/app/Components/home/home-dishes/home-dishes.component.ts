import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-dishes',
  templateUrl: './home-dishes.component.html',
  styleUrls: ['./home-dishes.component.css']
})
export class HomeDishesComponent implements OnInit {
 topDishes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Get the top 3 rated dishes.
    this.http.get('http://localhost:8000/api/v1/dishes/topRated').subscribe(response => {
     // this.dishes = response.json();
     console.log(response);
    });

}
}
