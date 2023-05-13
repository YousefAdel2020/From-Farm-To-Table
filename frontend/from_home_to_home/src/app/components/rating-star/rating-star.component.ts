import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent {
  @Input() rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  setRating(rating: number): void {
    this.rating = rating;
  }
}
