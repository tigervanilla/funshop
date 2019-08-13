import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';
import { DataService } from '../data.service';

import { Product } from '../product';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.css']
})
export class TrendingProductsComponent implements OnInit {
  trendingProducts: Product[];
  constructor(private cartService: CartService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTrendingProducts().subscribe((data: Product[]) => this.trendingProducts = data);
  }

  addToCart(index: number) {
    this.cartService.addToCart(this.trendingProducts[index].img, this.trendingProducts[index].name, this.trendingProducts[index].price, 1);
  }
}
