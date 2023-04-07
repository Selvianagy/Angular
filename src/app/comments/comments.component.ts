import { Component } from '@angular/core';
import { IComment } from 'src/app/SharedClassesandtypes/comment';
import {CommentservicesService} from '../services/commentservices.service'
import { ActivatedRoute, ParamMap, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  selectedId:any;

  CommentsListofpost:IComment[]=[]
  errorMessage:any;
  constructor(public commentservice:CommentservicesService,private activatedRoute:ActivatedRoute){

  }

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get("id");
    });
    this.commentservice.GetComment(this.selectedId).subscribe({
      next:data=>this.CommentsListofpost=data,
      error:err=>this.errorMessage=err
    })
  }
}
