import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'https://fakestoreapi.com';

  constructor(private _HttpClient: HttpClient) { }

  allProduct(): Observable<IProduct> {
    return this._HttpClient.get<IProduct>(`${this.baseUrl}/products`);
  }
}
