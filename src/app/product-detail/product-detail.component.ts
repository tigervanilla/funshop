import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// The location is an Angular service for interacting with the browser.Use it to navigate back to the view that navigated here.

import { DataService } from './../data.service';
import { CartService } from './../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: string;

  constructor(
    private dataService: DataService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location
    ) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getProductDetail(this.id).subscribe(details => this.product = details);
  }

  addToCart() {
    this.cartService.addToCart(this.product.img, this.product.name, this.product.price, 1);
  }

}
