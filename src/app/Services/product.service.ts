import { Injectable } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { Observable, from, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.productsUrl);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
  }

  getProductsByCategory(category: string): Observable<any>{
    return this.http.get<any>(`${this.productsUrl}/category/${category}`);
  }
}
