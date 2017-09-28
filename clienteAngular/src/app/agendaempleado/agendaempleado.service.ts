import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Agendaempleado } from './agendaempleado';
@Injectable()
export class AgendaempleadoService {

  constructor(private http: Http) {}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private URL = 'http://localhost:8030/agendaempleado';


  crearAgendaEmpleado(agendaEmpleado: Agendaempleado): Promise<Agendaempleado> {
    return this.http
      .post(this.URL, JSON.stringify(agendaEmpleado), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Agendaempleado)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error en Sucursal ', error);
    return Promise.reject(error.message || error);
  }

}
