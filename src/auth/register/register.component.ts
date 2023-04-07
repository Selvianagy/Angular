import { Component ,OnInit} from '@angular/core';
import{IUser} from '../Interfaces/registeruser'
import {RegisterandloginservicesService} from '../services/registerandloginservices.service'
import {  Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  User:IUser={} as IUser
  msg:string=''
  constructor(public regService:RegisterandloginservicesService,private router:Router){}
  



  ngOnInit(){
    // this.submitData();
  }
  submitData(){
    this.regService.Register(this.User).subscribe({
      next:(data)=>{
        if(data==false){
          this.router.navigate(["/auth/login"]);
        }else{
          this.msg='This Email Exist Please Change it'
          this.router.navigate(["/auth/register"]);
        }
      },
      error:error=>console.log(error)
    });
  }
  
}
