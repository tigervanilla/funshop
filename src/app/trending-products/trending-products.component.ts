import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.css']
})
export class TrendingProductsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(img: string, name: string, price: number, qty: number): void {
    this.cartService.addToCart(img, name, price, qty);
  }
}
