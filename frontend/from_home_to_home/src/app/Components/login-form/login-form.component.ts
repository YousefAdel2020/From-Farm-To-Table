import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private authService: AuthService) {}

  submit() {
  

    this.authService
      .login("Yousef@gmail.com", "123456")
      .subscribe((response) => {
        console.log(response)
        this.authService.getUser().subscribe(response=>{
          console.log(response)
        })
      });
  }

}
