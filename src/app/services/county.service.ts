import { Injectable } from '@angular/core';
import {County} from "../common/County";
import {HttpClient} from "@angular/common/http";
import {BaseOperationService} from "./baseoperation.service";

@Injectable({
  providedIn: 'root'
})
export class CountyService extends BaseOperationService{

  constructor(private http: HttpClient) {
    super();
  }

  override page(pageNumber: number, size: number): Promise<any> {
    return super.page(pageNumber, size, this.http, 'assets/county.json');
  }

  getCounty() {
    return this.http.get<any>('assets/county.json')
      .toPromise()
      .then(res => <County[]>res.data)
      .then(data => { return data; });
  }
}
