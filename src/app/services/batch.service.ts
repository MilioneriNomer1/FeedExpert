import { Injectable } from '@angular/core';
import {Batch} from "../common/Batch";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { }

  getBatch() {
    return this.http.get<any>('assets/batch.json')
      .toPromise()
      .then(res => <Batch[]>res.data)
      .then(data => { return data; });
  }
}
