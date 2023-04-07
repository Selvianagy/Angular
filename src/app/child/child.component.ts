import { Component, Input , Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/SharedClassesandtypes/shred';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input('products') ListProduct:any
  @Output() emittproducts = new EventEmitter<IProduct[]>();

  
  renderproduct(){
    this.emittproducts.emit(this.ListProduct);
  }

  sayWelcome(){
    console.log("WELCOME")
  }
}
