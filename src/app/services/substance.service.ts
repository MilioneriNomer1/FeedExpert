import { Injectable } from '@angular/core';
import {Substance} from "../common/Substance";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubstanceService {

  constructor(private http: HttpClient) { }

  getSubstance() {
    return this.http.get<any>('assets/substance.json')
      .toPromise()
      .then(res => <Substance[]>res.data)
      .then(data => { return data; });
  }
}
