import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Requerimientosplaza } from './requerimientosplaza';

@Injectable()
export class RequerimientoplazaService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private URL = 'http://rhnode.tk/requerimientosplaza';

  crearRequerimientoPlaza(requerimientosPlaza: Requerimientosplaza): Promise<Requerimientosplaza> {
    return this.http
      .post(this.URL, JSON.stringify(requerimientosPlaza), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Requerimientosplaza)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error en Requerimientos Plaza ', error);
    return Promise.reject(error.message || error);
  }
}
