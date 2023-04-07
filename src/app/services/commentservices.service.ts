import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IComment } from 'src/app/SharedClassesandtypes/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentservicesService {

  constructor(private http:HttpClient ) { }

  GetComment(postid:any):Observable<IComment[]>{
    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
}
