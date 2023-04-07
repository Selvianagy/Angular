import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent {
  LoginForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.LoginForm=fb.group({
      email:['',[Validators.required,Validators.pattern('^[A-Za-z0-9.]+@[A-Za-z]+\.[A-Za-z]+$')]],
      password:['',[Validators.required]],
    });

  }

  get Email(){
    return this.LoginForm.get('email');
  }
  get Password(){
    return this.LoginForm.get('password');
  }
  submitData(){

  }
}
