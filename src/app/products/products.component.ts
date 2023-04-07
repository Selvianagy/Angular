import { Component, ViewChild } from '@angular/core';

import { IProduct } from 'src/app/SharedClassesandtypes/shred';
import { ICategory } from 'src/app/SharedClassesandtypes/shred';
import { DiscountOffers } from 'src/app/SharedClassesandtypes/shred';
import { ChildComponent } from '../child/child.component';
import {ProductServiceService} from '../services/product-service.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  Discount:DiscountOffers
  Storename:string
  StoreLogo:string
  ProductList:IProduct[]=[]
  CategoryList:ICategory[]
  
  ClientName:string
  IsPurshased:boolean
  isdiscount:boolean 
  textId:string="myid"

  selectedname:any
  

  
  constructor(public productservice:ProductServiceService,private activatedRoute:ActivatedRoute,private router:Router){
    this.Discount=DiscountOffers['10%']
    this.Storename="Azure"
    this.StoreLogo="./assets/Photo_banner/logo2.jpg"
    // this.ProductList=[
    //   {ID:0,Name:'dress',Quantity:500,Price:200,Img:'./assets/Photo_banner/dress.jpg'},
    //   {ID:1,Name:'shoes',Quantity:300,Price:300,Img:'./assets/Photo_banner/shoes.jpg'},
    //   {ID:2,Name:'hat',Quantity:200,Price:150,Img:'./assets/Photo_banner/hat.jpg'},
    // ]
  this.CategoryList=[
      {ID:0,Name:'Clothes'},
      {ID:1,Name:'Shoeses'},
    ]
    this.ClientName="Sara"
    this.IsPurshased=true
    this.isdiscount = this.checkRole()
    

  }
 
ngOnInit() {
  this.renderValues()
 
}

renderValues(){
    this.ProductList=this.productservice.GetAllProducts();
    this.productservice.showproducts=!this.productservice.showproducts;

}

checkRole():boolean{
   if(this.Discount===DiscountOffers.NoDiscount){
       return false
   }else{
    return true
   }
   
}

Buyproduct()
  {
    this.IsPurshased=false
  }

  ProductListfromchild:IProduct[]=[]
showproducts(listpro:IProduct[]){

  this.ProductListfromchild=listpro;
}

@ViewChild(ChildComponent) child!: ChildComponent;

ngAfterViewInit() {
  //this.child.sayWelcome();
}

WithDiscount()
{
  this.router.navigate(["withdiscount"],{relativeTo:this.activatedRoute});
}
WithoutDiscount()
{
  this.router.navigate(["withoutdiscount"],{relativeTo:this.activatedRoute});
}


}
