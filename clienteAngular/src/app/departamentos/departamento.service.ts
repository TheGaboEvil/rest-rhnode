import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Departamento } from './departamento';


@Injectable()
export class DepartamentoService {

  constructor(private http: Http) {}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private URL = 'http://rhnode.tk/departamento';

  crearDepartamento(departamento: Departamento): Promise<Departamento> {
    return this.http
      .post(this.URL, JSON.stringify(departamento), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Departamento)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error en Departamento ', error);
    return Promise.reject(error.message || error);
  }

}
