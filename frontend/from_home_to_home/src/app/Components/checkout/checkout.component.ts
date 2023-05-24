import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  // checkoutForm!: FormGroup;

  // constructor(private formBuilder: FormBuilder) { }

  // ngOnInit(): void {
  //   this.checkoutForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     address: ['', Validators.required],
  //     country: ['', Validators.required],
  //     zip: ['', Validators.required],
  //     nameOnCard: ['', Validators.required],
  //     cardNumber: ['', Validators.required],
  //     expiryMonth: ['', Validators.required],
  //     expiryYear: ['', Validators.required],
  //     cvv: ['', Validators.required]
  //   });
  // }

  // onSubmit() {
  //   // Implement your submit logic here
  // }
}
