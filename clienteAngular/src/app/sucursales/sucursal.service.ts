import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Sucursal } from './sucursal';

@Injectable()
export class SucursalService {
  constructor(private http: Http) {}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private URL = 'http://localhost:8030/sucursales';

  getSucursales(): Promise<Sucursal[]> {
    return this.http
      .get(this.URL)
      .toPromise()
      .then(response => response.json().Sucursales as Sucursal[])
      .catch(this.handleError);
  }

  crearSucursal(sucursal: Sucursal): Promise<Sucursal> {
    return this.http
      .post(this.URL, JSON.stringify(sucursal), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Sucursal)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error ', error);
    return Promise.reject(error.message || error);
  }
}
