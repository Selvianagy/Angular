import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/SharedClassesandtypes/user';



@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  _userUrl="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient ) { }

  GetUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._userUrl).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
  
}
