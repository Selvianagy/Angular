import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/SharedClassesandtypes/post';

@Injectable({
  providedIn: 'root'
})
export class PostservicesService {
  _postUrl="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient ) { }

  GetPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._postUrl).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
}
