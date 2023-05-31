import { Component, OnInit } from '@angular/core';

import { ChiefService} from '../../services/chief.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{

  img: string | undefined;
  summary: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  address: string | undefined;
  id:any;
  updateUserForm!: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private chiefService: ChiefService) {}

  ngOnInit(): void {

    
    // retrieve the user object from local storage
    let user = localStorage.getItem("user");
 
    if (user) {
      // parse the user object into a JavaScript object
      const userData = JSON.parse(user);

      // assign corresponding values from the user object to variables in the component
      // this.img = userData.img;
      this.id = userData._id;
      this.firstName = userData.firstName 
      this.lastName = userData.lastName;
      this.email = userData.email;
      this.address = userData.address;
      this.phoneNumber = userData.phoneNumber;
      this.img = userData.img;
      this.summary = userData.summary;
    }

    this. updateUserForm = this.formBuilder.group({

      firstName: [this.firstName],
      lastName: [this.lastName],
      email: [this.email],
      address: [this.address],
      phoneNumber: [this.phoneNumber],
      img:[this.img],
      summary: [this.summary],
});
  }


  resetForm() {
    // Reset the form fields to their default values
    this.updateUserForm.reset({});
    this.router.navigate(['/viewUser']);
  }
  updateuser(){
    const userid=this.id;
    const data = this.updateUserForm.value;
    console.log(data);
    let token = localStorage.getItem('token');
    this.chiefService.updateChief(userid ,data, token).subscribe(response => {
      console.log('Updated user:', response);
      // redirect to the details page for the updated dish
      
    });
    this.resetForm();
  }
}
