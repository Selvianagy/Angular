import { Component } from '@angular/core';
import{ILogin} from '../Interfaces/loginuser'
import {RegisterandloginservicesService} from '../services/registerandloginservices.service'
import {  Router } from '@angular/router';
import{IUser} from '../Interfaces/registeruser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginUser:ILogin={} as ILogin
  User:IUser={} as IUser
  msg:string=''
  constructor(public regService:RegisterandloginservicesService,private router:Router){}

  submitData(){
    this.regService.login(this.loginUser).subscribe({
      next:(data)=>{
        if(data==false){
          this.msg=' You Must register this email and passord not valid'
          this.router.navigate(["/auth/login"]);
         }else if(data==true){
          this.msg='Email or Password is Wrong'
                this.router.navigate(["/auth/login"]);
         }else{
          this.User=data as IUser
          this.router.navigate(["/home",this.User.username]);
          }
      },
      error:error=>console.log(error)
    });
  }
}
