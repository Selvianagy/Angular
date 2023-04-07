import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/SharedClassesandtypes/shred';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  Productarray:IProduct[]=[
    {ID:0,Name:'dress',Quantity:500,Price:200,Img:'./assets/Photo_banner/dress.jpg',Isdiscount:true,discount:0},
    {ID:1,Name:'shoes',Quantity:300,Price:300,Img:'./assets/Photo_banner/shoes.jpg',Isdiscount:false,discount:0},
    {ID:2,Name:'hat',Quantity:200,Price:150,Img:'./assets/Photo_banner/hat.jpg',Isdiscount:true,discount:0},
  ]
   
  GetAllProducts(){
    return this.Productarray;
  }

  GetProductsWithDiscount(){
   var Productswithdiscount:IProduct[]=[]
    for(let product of this.Productarray){
      if(product.Isdiscount==true){
        Productswithdiscount.push(product);
      }
    }
    return Productswithdiscount;
  }

  GetProductsWithoutDiscount(){
    var Productswithoutdiscount:IProduct[]=[]
     for(let product of this.Productarray){
       if(product.Isdiscount==false){
        Productswithoutdiscount.push(product);
       }
     }
     return Productswithoutdiscount;
   }

  showproducts:boolean=true;
  GetProductById(prdId:number){
    for(let product of this.Productarray){
      if(product.ID==prdId){
        return product;
      }
    }
    return null;
  }

}
