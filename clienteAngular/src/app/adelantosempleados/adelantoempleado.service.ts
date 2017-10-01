import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Adelantoempleado } from './adelantoempleado';

@Injectable()
export class AdelantoempleadoService {

  constructor(private http: Http) {}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private URL = 'http://rhnode.tk/adelantosempleado';

  crearSucursal(adelantoEmpleado: Adelantoempleado): Promise<Adelantoempleado> {
    return this.http
      .post(this.URL, JSON.stringify(adelantoEmpleado), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Adelantoempleado)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error en Adelantoempleado ', error);
    return Promise.reject(error.message || error);
  }
}
