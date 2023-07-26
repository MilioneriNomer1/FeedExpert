import { Injectable } from '@angular/core';
import {Customer} from "../common/Customer";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer() {
    return this.http.get<any>('assets/customer.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }
}
