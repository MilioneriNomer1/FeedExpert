import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Customer} from "../common/Customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<any>('assets/customers-large.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }
}
