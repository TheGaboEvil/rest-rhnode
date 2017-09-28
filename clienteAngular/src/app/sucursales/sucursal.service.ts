import { Injectable } from '@angular/core';
// copias desde aqui
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// hasta aqui

// importar la clase es el archivo nombre.ts
import { Sucursal } from './sucursal';

@Injectable()
export class SucursalService {

  // copiar desde aqui
  constructor(private http: Http) {}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private URL = 'http://localhost:8030/sucursales';

  // Eliminar esta funcion
  getSucursales(): Promise<Sucursal[]> {
    return this.http
      .get(this.URL)
      .toPromise()
      .then(response => response.json().Sucursales as Sucursal[])
      .catch(this.handleError);
  }

  /**
   * Editar los nomre los que inician en minuscula deben iniciar con minuscula
   *  los que inician con Mayusculas son las Clases
   *  los que incian con minusculas son instancias de la clase
   *  TENER MUCHO OJO PARA EDITARLO POR FAVOR....
   * * */
  crearSucursal(sucursal: Sucursal): Promise<Sucursal> {
    return this.http
      .post(this.URL, JSON.stringify(sucursal), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Sucursal)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error en Sucursal ', error);
    return Promise.reject(error.message || error);
  }
  // hasta aqui
}
