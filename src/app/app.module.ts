import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import { HomeComponent } from './home/home.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrendingProductsComponent,
    HomeComponent,
    TopBrandsComponent,
    ContactUsComponent,
    FooterComponent,
    FiltersComponent,
    CatalogueComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
