import { Component } from '@angular/core';
import {ProductServiceService} from '../services/product-service.service'
import { IProduct } from 'src/app/SharedClassesandtypes/shred';

@Component({
  selector: 'app-productwithoutdiscount',
  templateUrl: './productwithoutdiscount.component.html',
  styleUrls: ['./productwithoutdiscount.component.scss']
})
export class ProductwithoutdiscountComponent {
  ProductList:IProduct[]=[]
  constructor(public productservice:ProductServiceService){}
  ngOnInit() {
    this.ProductList=this.productservice.GetProductsWithoutDiscount();
   
  }
}
