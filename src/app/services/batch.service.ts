import { Injectable } from '@angular/core';
import {Batch} from "../common/Batch";
import {HttpClient} from "@angular/common/http";
import {BaseOperationService} from "./baseoperation.service";

@Injectable({
  providedIn: 'root'
})
export class BatchService extends BaseOperationService{

  constructor(public http: HttpClient) {
    super();
  }

  override page(pageNumber: number, size: number): Promise<any> {
    return super.page(pageNumber, size, this.http, 'assets/batch.json');
  }

}
