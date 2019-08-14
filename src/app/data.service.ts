import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTrendingProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/trending-products`);
  }

  getProductDetail(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/product-detail/${id}`);
  }

  getCatalogueData(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/catalogue`);
  }
}
