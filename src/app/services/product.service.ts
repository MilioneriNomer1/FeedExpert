import { Injectable } from '@angular/core';
import {Product} from "../common/Product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>('assets/product.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }
}
