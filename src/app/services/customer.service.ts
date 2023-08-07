import { Injectable } from '@angular/core';
import {Customer} from "../common/Customer";
import {HttpClient} from "@angular/common/http";
import {BaseOperationService} from "./baseoperation.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseOperationService{

  constructor(private http: HttpClient) {
    super();
  }


  override page(pageNumber: number, size: number): Promise<any> {
    return super.page(pageNumber, size, this.http, 'assets/customer.json');
  }

  getCustomer() {
    return this.http.get<any>('assets/customer.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }
}
