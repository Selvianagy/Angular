import { Component } from '@angular/core';
import { ICategory } from 'src/app/SharedClassesandtypes/shred';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

CategoryList:ICategory[]


constructor(){
  this.CategoryList=[
    {ID:0,Name:'Clothes'},
    {ID:0,Name:'Shoeses'},
  ]
}

}
