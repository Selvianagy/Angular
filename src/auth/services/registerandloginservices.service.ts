import { Injectable } from '@angular/core';
import{IUser} from '../Interfaces/registeruser'
import{ILogin} from '../Interfaces/loginuser'

import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterandloginservicesService {

  _url:string="http://localhost:3000/Registered";
  _urllogin="http://localhost:3000/login";
  constructor(private http:HttpClient) { }

  login(userlogin:ILogin)
  {
   return this.http.post(this._urllogin,userlogin).pipe(catchError((err)=>{
    return throwError(()=>err.message ||"server error");
  }));
  }
  Register(user:IUser)
  {
   return this.http.post(this._url,user).pipe(catchError((err)=>{
    return throwError(()=>err.message ||"server error");
  }));
  }
}
