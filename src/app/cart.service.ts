interface CartItem {
  img: string;
  name: string;
  price: number;
  qty: number;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemInterface: CartItem;
  constructor() { }

  addToCart(img: string, name: string, price: number, qty: number): void {
    // alert(`${img}=>${name}=>${price}=>${qty}`);
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    }
    cart.push({img, name, price, qty});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Add To Cart Successful`);
  }

  getItemsInCart(): CartItem[] {
    return JSON.parse(localStorage.getItem('cart'));
  }

  syncCart(cartItems: CartItem[]) {
    localStorage.setItem('cart',JSON.stringify(cartItems));
  }
}

