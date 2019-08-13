import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.css']
})
export class TrendingProductsComponent implements OnInit {
  addToCart: any;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.addToCart = this.cartService.addToCart;
  }
}
