import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public usuario: Usuario;
  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario(' ', ' ', ' ', ' ', ' ');
   }

  ngOnInit() {
  }

  crearUsuario(usuario: Usuario): void {
    this.usuarioService.crearUsuario(usuario);
  }
}
