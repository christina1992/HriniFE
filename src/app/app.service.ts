import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Variant} from "./Variant";
@Injectable()
export class AppService {
  httpOptions = {
    headers: new HttpHeaders({})
  };

  constructor(private httpClient: HttpClient) {
  }

  getBestVariant(M, H, N, a, b, c): Observable<any> {
    const endpoint = 'http://ttest.us-east-2.elasticbeanstalk.com/getVariant/' + N + '/' + H + '/' + M + '/' + a + '/' + b + '/' + c;
    console.log(endpoint);
    return this.httpClient
      .get<Variant[]>(endpoint, this.httpOptions);

  }


}
