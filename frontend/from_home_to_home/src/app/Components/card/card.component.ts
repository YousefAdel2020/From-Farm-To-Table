import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() content!: string;

  getRatingStars(rating: number): string {
    const maxRating = 5;
    const container = document.createElement('div');
  
    for (let i = 0; i < maxRating; i++) {
      const star = document.createElement('i');
      star.classList.add('fa', 'fa-star');
      if (i < rating) {
        star.classList.add('fill');
      }
      container.appendChild(star);
    }
  
    return container.innerHTML;
  }
}
