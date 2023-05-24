import { Component,OnInit } from '@angular/core';
import { ChiefService } from '../../services/chief.service';
import { DishService } from 'src/app/services/dish.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-chief',
  templateUrl: './profile-chief.component.html',
  styleUrls: ['./profile-chief.component.css']
})
export class ProfileChiefComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  ID:any;
  chief:any;
  Dishs:any;
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
  //   );
  //   this.myService.getDishs().subscribe(
  //     {
  //       next:(data)=>{
  //         console.log(data)
  //         this.Dishs = data;
  //       },
  //       error:(err)=>{console.log(err)}
  //     }
    
  //   )


  // }
  // deleteDish(id:any){
  //   this.myService.delete(id).subscribe(data=>{}
      
  //   );
  //   this.myService.getDishs().subscribe((response: any)=>{
  //     this.Dishs=response;
  //   }
   
      
  //   )
  // }
  
  userName = 'weam';
  email = 'weam@wp.pl';
  phoneNumber = '123456789';
  Address = 'Warszawa';

  
}
