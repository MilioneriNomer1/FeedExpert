import { Injectable } from '@angular/core';
import {County} from "../common/County";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  constructor(private http: HttpClient) { }

  getCounty() {
    return this.http.get<any>('assets/county.json')
      .toPromise()
      .then(res => <County[]>res.data)
      .then(data => { return data; });
  }
}
