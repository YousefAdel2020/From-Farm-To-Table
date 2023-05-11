import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private readonly myClient:HttpClient) { }
  
  private readonly Base_URL = "http://localhost:3000/students";
    //Methods [All Requests]
    GetAllchief(){
      //method[Get-Delete-Put-Patch]
      return this.myClient.get(this.Base_URL);
    }
    GetchiefByID(id:any){
      return this.myClient.get(this.Base_URL+"/"+id);
    }
    updatechief(student:any){
      return this.myClient.put(this.Base_URL+"/"+student.id,student);
    }
}
