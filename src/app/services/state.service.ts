import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {State} from "../common/State";
import {BaseOperationService} from "./baseoperation.service";

@Injectable({
  providedIn: 'root'
})
export class StateService extends BaseOperationService{

  constructor(private http: HttpClient) {
    super();
  }

  override page(pageNumber: number, size: number): Promise<any> {
    return super.page(pageNumber, size, this.http, 'assets/state.json');
  }

}
