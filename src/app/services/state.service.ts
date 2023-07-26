import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {State} from "../common/State";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }

  getState() {
    return this.http.get<any>('assets/state.json')
      .toPromise()
      .then(res => <State[]>res.data)
      .then(data => { return data; });
  }

}
