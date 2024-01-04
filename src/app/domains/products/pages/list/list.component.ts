import { Component,signal,inject, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import {ProductComponent} from '../../components/product/product.component';
import {HeaderComponent} from '../../../shared/header/header.component';
import { product} from '../../components/../../shared/models/product.model';
import { ProductService} from '../../components/../../shared/services/product.service';
import { CartService } from 'src/app/domains/shared/services/cart.service';
import { CategoryService } from 'src/app/domains/shared/services/category.service';
import { category } from 'src/app/domains/shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent,HeaderComponent,RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

products =signal<product[]>([]);
categories =signal<category[]>([]);

private cart =inject(CartService);
private prod =inject(ProductService);
private category =inject(CategoryService);

@Input() category_id?:string;


ngOnInit()
{
this.getCategories();
}
ngOnChanges(changes:SimpleChanges){
this.getproducts();
}
addtoCart(product:product){
this.cart.addtocart(product);
}

private getproducts(){
  this.prod.getproducts(this.category_id)
  .subscribe({
    next:(products)=>{
      this.products.set(products);
    },
    error:()=>{
  
    }
  })
}

private getCategories(){
  this.category.getAll()
  .subscribe({
    next:(data)=>{
      this.categories.set(data);
    },
    error:()=>{
  
    }
  })
}

}