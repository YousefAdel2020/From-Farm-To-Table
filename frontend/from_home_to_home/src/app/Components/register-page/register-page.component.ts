import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.services';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(""),
    address: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    role: new FormControl(''),
    image: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  

  submit(){
    let firstName = this.registerForm.controls["firstName"].value;
    let lastName= this.registerForm.controls["lastName"].value;
    let email = this.registerForm.controls["email"].value;
    let password= this.registerForm.controls["password"].value;
    let address= this.registerForm.controls["address"].value;
    let phoneNumber= this.registerForm.controls["phone"].value;
    let gender= this.registerForm.controls["gender"].value || 'Male';
    let role= this.registerForm.controls["role"].value || 'chef';
    let img= this.registerForm.controls["image"].value;
    
    let data = {
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNumber,
      gender,
      role,
      img
    }
    console.log(data)

    this.authService
      .register(data)
      .subscribe((response) => {
        console.log(response)
      });
   }
}
