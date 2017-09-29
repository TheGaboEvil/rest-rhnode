import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Asistenciaempleado } from './asistenciaempleado';

@Injectable()
export class AsistenciaempleadoService {

  constructor(private http: Http) {}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private URL = 'http://localhost:8030/asistenciaempledo';


  crearAsistenciaEmpleado(asistenciaEmpleado: Asistenciaempleado): Promise<Asistenciaempleado> {
    return this.http
      .post(this.URL, JSON.stringify(asistenciaEmpleado), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Asistenciaempleado)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error en Sucursal ', error);
    return Promise.reject(error.message || error);
  }

}
