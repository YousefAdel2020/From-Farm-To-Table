import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.services';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService) {}

  validate(){
  if(this.loginForm.valid){
    let email = this.loginForm.controls["email"].value || '';
    let password= this.loginForm.controls["password"].value || '';

    this.login(email, password)
  }
  }

  login(email:any, password:any) {
       
    this.authService
      .login(email, password)
      .subscribe((response) => {
        if(response.token){
          window.location.href='/'
         }  
      });
  }

  get password () {
    return this.loginForm.controls["password"].valid;
  }

 get email(){
  return this.loginForm.controls["email"].valid;
 }
 isEmailDirty(){
  return this.loginForm.controls["email"].dirty;
}

isPasswordDirty(){
  return this.loginForm.controls["password"].dirty;
}

}
