import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';
import { DataService } from './../data.service';

import { Product } from './../product';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  // addToCart: any;
  productList: Product[];

  constructor(private cartService: CartService, private dataService: DataService) { }

  ngOnInit() {
    // this.addToCart = this.cartService.addToCart;
    this.dataService.getCatalogueData().subscribe(data => this.productList = data);
  }

  addToCart(index: number) {
    this.cartService.addToCart(this.productList[index].img, this.productList[index].name, this.productList[index].price, 1);
  }

}
