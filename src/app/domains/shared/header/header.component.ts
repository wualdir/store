import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

hidesmenu=signal(true);

private cartservice=inject(CartService);
cart=this.cartservice.cart;
total=this.cartservice.total;


togglebutton(){
this.hidesmenu.update(prevenstate => !prevenstate);
}

}
