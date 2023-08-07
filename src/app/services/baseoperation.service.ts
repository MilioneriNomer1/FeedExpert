import {HttpClient} from "@angular/common/http";

export class BaseOperationService {

  public page(pageNumber: number, size: number, http: HttpClient, url: string) {
    return http.get<any>(url)
      .toPromise()
      .then(res => <any>res.data)
      .then(data => { return data; });
  }

}
