import { Component, OnInit } from '@angular/core';
import { Asistenciaempleado } from '../asistenciaempleado';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public asistenciaempleado: Asistenciaempleado;

  constructor() {
    this.asistenciaempleado = new Asistenciaempleado(' ', ' ', ' ', ' ');
   }

  ngOnInit() {
  }

  crearAsistenciaEmpleado() {
    // todo
  }

  limpiarAsistenciaEmpleado() {
    // todo
  }

}
