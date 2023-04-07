import { Component } from '@angular/core';
import { IPost } from 'src/app/SharedClassesandtypes/post';
import {PostservicesService} from '../services/postservices.service'
import { ActivatedRoute, ParamMap, Router, UrlSegment } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  PostsList:IPost[]=[]
  errorMessage:any;
  constructor(public postservice:PostservicesService,private router:Router){

  }

  ngOnInit():void {
    this.postservice.GetPosts().subscribe({
      next:data=>this.PostsList=data,
      error:err=>this.errorMessage=err
    })
   
  }

  showcomment(postid:any){
    this.router.navigate(["/post",postid]);
  }
}
