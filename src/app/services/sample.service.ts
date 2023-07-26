import { Injectable } from '@angular/core';
import {Sample} from "../common/Sample";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getSample() {
    return this.http.get<any>('assets/sample.json')
      .toPromise()
      .then(res => <Sample[]>res.data)
      .then(data => { return data; });
  }
}