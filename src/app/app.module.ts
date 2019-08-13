import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import { HomeComponent } from './home/home.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrendingProductsComponent,
    HomeComponent,
    TopBrandsComponent,
    FooterComponent,
    FiltersComponent,
    CatalogueComponent,
    ShopComponent,
    ProductDetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
providers: [/* no need to place any providers due to the `providedIn` flag...*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
