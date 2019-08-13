import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  addToCart: any;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.addToCart = this.cartService.addToCart;
  }

}
