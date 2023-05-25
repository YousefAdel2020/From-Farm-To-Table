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
    email: new FormControl(''),
    password: new FormControl(""),
  });

  constructor(private authService: AuthService) {}

  submit() {
    let email = this.loginForm.controls["email"].value || '';
    let password= this.loginForm.controls["password"].value || '';
    console.log(email, password)
       
    this.authService
      .login(email, password)
      .subscribe((response) => {
        if(response.token){
          window.location.href='/'
         }  
      });
  }

}
