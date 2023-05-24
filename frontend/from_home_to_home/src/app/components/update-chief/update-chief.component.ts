import { Component , OnInit} from '@angular/core';
import { ChiefService } from '../../services/chief.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-chief',
  templateUrl: './update-chief.component.html',
  styleUrls: ['./update-chief.component.css']
})
export class UpdateChiefComponent {

  ID:any;
  chief:any;
  router: any;
  // constructor(myRoute:ActivatedRoute,public myService:ChiefService){
  //   this.ID= myRoute.snapshot.params["id"];
  // }
  // ngOnInit(): void {
  //   this.myService.getChiefbyID(this.ID).subscribe(
  //     {
  //       next:(data)=>{
  //         console.log(data);
  //         this.chief = data;
  //       },
  //       error:(err)=>{console.log(err)}
  //     }
  //   );}
  //   update(){
  //     this.myService.updateChief(this.chief).subscribe(
  //       (data) => {
  //         console.log(data);
  //         this.router.navigate(['/chiefs']);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  



  image: string | undefined;
  aboutMe: string | undefined;
  lname: string | undefined;
  fname: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  address: string | undefined;
}
