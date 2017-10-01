import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Http, Headers} from '@angular/http';


@Injectable()
export class UsuarioService {

  constructor(private http: Http) {}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private URL = 'http://localhost:8030/usuarios';

  crearUsuario(usaurio: Usuario): Promise<Usuario> {
    return this.http
      .post(this.URL, JSON.stringify(usaurio), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Usuario)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error en Sucursal ', error);
    return Promise.reject(error.message || error);
  }
}
