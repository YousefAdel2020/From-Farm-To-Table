import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() ImageUrl!: string;
  @Input() product!:any;

  isAdded!:boolean;
  constructor(private router: Router, private cartService:CartService) {}

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

  handleDetailsClick(){
   console.log(this.product._id);
   this.router.navigate(['/viewDetails', this.product._id]);
  }

  addToCart(){
    let token = localStorage.getItem('token');
    let id = this.product._id;

     //call the add to cart service 
    this.cartService
        .addToCart(id, token).subscribe(response=>{
          console.log(response)
          this.isAdded=true;
        })

    }
}
