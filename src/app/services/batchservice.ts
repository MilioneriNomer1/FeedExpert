import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BatchComponent} from "../components/batch/batch.component";

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) { }

  getBatch() {
    return this.http.get<any>('assets/batch.json')
      .toPromise()
      .then(res => <BatchComponent[]>res.data)
      .then(data => { return data; });
  }
}
