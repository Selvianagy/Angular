import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../CustomValidation/ConfirmPassword';


@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent {

  RegisterForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.RegisterForm=this.fb.group({
      username:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      email:['',[Validators.required,Validators.pattern('^[A-Za-z0-9.]+@[A-Za-z]+\.[A-Za-z]+$')]],
      password:['',[Validators.required]],
      confirmpassword  :['',[Validators.required]],
      Whereyouhere:['',[Validators.required]]
    },{validator:[ConfirmPasswordValidator]});

  }
 get Username(){
    return this.RegisterForm.get('username');
  }
  get Email(){
    return this.RegisterForm.get('email');
  }
  get Password(){
    return this.RegisterForm.get('password');
  }
  get Confirmpassword(){
    return this.RegisterForm.get('confirmpassword');
  }
  get Whereyouhere(){
    return this.RegisterForm.get('Whereyouhere');
  }
  submitData(){

  }
}
