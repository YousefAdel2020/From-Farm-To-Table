import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {


  registerForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    address: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    phone: new FormControl(''),
    gender: new FormControl(''),
    role: new FormControl(''),
    img: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}
   
  
   validate(){
    if (this.registerForm.valid){
      console.log("clicked")
      let firstName = this.registerForm.controls["firstName"].value;
      let lastName= this.registerForm.controls["lastName"].value;
      let email = this.registerForm.controls["email"].value;
      let password= this.registerForm.controls["password"].value;
      let address= this.registerForm.controls["address"].value;
      let phoneNumber= this.registerForm.controls["phone"].value;
      let gender= this.registerForm.controls["gender"].value;
      let role= this.registerForm.controls["role"].value || 'chef';
      let img= this.registerForm.controls["img"];

   

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
     console.log(data);
     this.register(data)
    }

   }
  register(data:any){
    
    this.authService
      .register(data)
      .subscribe((response) => {
        console.log(response)
        if(response.token){
         window.location.href='/'
        }
        
      });
   }

   get fname () {
    return this.registerForm.controls["firstName"].valid;
  }
  get lname () {
    return this.registerForm.controls["lastName"].valid;
  }


  get password () {
    return this.registerForm.controls["password"].valid;
  }

 get email(){
  return this.registerForm.controls["email"].valid;
 }
  
  isEmailDirty(){
    return this.registerForm.controls["email"].dirty;
  }
  isfNameDirty(){
    return this.registerForm.controls["firstName"].dirty;
  }
  islNameDirty(){
    return this.registerForm.controls["lastName"].dirty;
  }
  isPasswordDirty(){
    return this.registerForm.controls["password"].dirty;
  }

  


   
}
