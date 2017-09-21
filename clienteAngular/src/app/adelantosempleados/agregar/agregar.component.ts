import { Component, OnInit } from '@angular/core';
import { Adelantoempleado } from '../adelantoempleado';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public adelantoempleado: Adelantoempleado;

  constructor() {
    this.adelantoempleado = new Adelantoempleado(' ', ' ', ' ', ' ', ' ');
  }

  ngOnInit() {
  }

  crearAdelantoEmpleado() {
    // todo
  }

  limpiarAdelantoEmpleado() {
    // todo
  }


}
