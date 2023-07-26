import { Injectable } from '@angular/core';
import {City} from "../common/City";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCity() {
    return this.http.get<any>('assets/city.json')
      .toPromise()
      .then(res => <City[]>res.data)
      .then(data => { return data; });
  }
}
