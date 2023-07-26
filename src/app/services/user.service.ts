import { Injectable } from '@angular/core';
import {User} from "../common/User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any>('assets/user.json')
      .toPromise()
      .then(res => <User[]>res.data)
      .then(data => { return data; });
  }
}
