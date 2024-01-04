import { Injectable, signal,computed } from '@angular/core';
import { product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

cart= signal<product[]>([]);

total=computed(()=>{
  const cart=this.cart();
  return cart.reduce((total,product)=>total+product.price,0);
})

  constructor() { }

  addtocart(product:product){
    this.cart.update(state=>[...state,product]);

  }
}
