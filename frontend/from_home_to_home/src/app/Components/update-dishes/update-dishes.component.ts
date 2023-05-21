import { Component } from '@angular/core';

@Component({
  selector: 'app-update-dishes',
  templateUrl: './update-dishes.component.html',
  styleUrls: ['./update-dishes.component.css']
})
export class UpdateDishesComponent {
  image: string | undefined;
  description: string | undefined;
}
