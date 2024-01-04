import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { product} from '../../components/../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  @Input() product!:product;
  @Output() addtoCart=new EventEmitter();

  addcartHandler(){
     this.addtoCart.emit(this.product);
  }
}
