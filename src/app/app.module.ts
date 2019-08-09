import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import { HomeComponent } from './home/home.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrendingProductsComponent,
    HomeComponent,
    TopBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
