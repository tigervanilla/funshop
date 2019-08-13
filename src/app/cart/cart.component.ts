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
  name: string;
  email: string;
  mobile: string;
  address: string;
  pincode: string;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItemsInCart();
    console.log(this.cartItems);
    this.getPayableAmount();
  }

  // ngOnDestroy() {
  //   this.cartService.syncCart(this.cartItems);
  // }

  getPayableAmount(): void {
    this.amountPayable =  0;
    for (const item of this.cartItems) {
      this.amountPayable += item.qty * item.price;
    }
    this.cartService.syncCart(this.cartItems);
    // return this.amountPayable;
  }

  removeItemFromCart(index: number): void {
    console.log(index);
    this.cartItems.splice(index, 1);
    this.cartService.syncCart(this.cartItems);
    this.getPayableAmount();
  }

  printShippingDetails(): void {
    console.log(this.name, this.email, this.address, this.mobile, this.pincode);
  }

}
