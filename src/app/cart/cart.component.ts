import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;
  amountPayable: number;
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartItems = this.cartService.getItemsInCart();
    console.log(this.cartItems);
    this.getPayableAmount();
  }

  getPayableAmount(): void {
    this.amountPayable =  0;
    for (const item of this.cartItems) {
      this.amountPayable += item.qty * item.price;
    }
    // return this.amountPayable;
  }

}
