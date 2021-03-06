import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  getFact() {
    return this._http.get('https://api.chucknorris.io/jokes/random');
  }

}
