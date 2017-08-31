import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NodetestService {

  constructor(private http: Http) { }

  getAllNodetest() {
    return this.http.get('/nodetest')
      .map(res => res.json());
  }
}
