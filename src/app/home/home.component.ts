import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedname:any;

  constructor(private activatedRoute:ActivatedRoute){ }

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedname=params.get("name");
    });
  }
}
