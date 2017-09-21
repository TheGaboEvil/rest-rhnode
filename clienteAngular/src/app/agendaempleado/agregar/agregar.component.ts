import { Component, OnInit } from '@angular/core';

import { Agendaempleado } from '../agendaempleado';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public agendaempleado: Agendaempleado;

  constructor() {
    this.agendaempleado = new Agendaempleado(' ', ' ', ' ', ' ', ' ');
   }

  ngOnInit() {
  }

  crearAgendaEmpleado() {
    // todo
  }

  limpiarAgendaEmpleado() {
    // todo
  }

}
