import { Component } from '@angular/core';
import {ProductServiceService} from '../services/product-service.service'
import { IProduct } from 'src/app/SharedClassesandtypes/shred';


@Component({
  selector: 'app-productwithdiscount',
  templateUrl: './productwithdiscount.component.html',
  styleUrls: ['./productwithdiscount.component.scss']
})
export class ProductwithdiscountComponent {

  ProductList:IProduct[]=[]
  constructor(public productservice:ProductServiceService){}
  ngOnInit() {
    this.ProductList=this.productservice.GetProductsWithDiscount();
   
  }
}
