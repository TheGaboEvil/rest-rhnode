import { Component, OnInit } from '@angular/core';

import { Sucursal } from '../sucursal';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public sucursal: Sucursal;


  constructor() {
    this.sucursal = new Sucursal(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ');
   }

  ngOnInit() {
  }
  crearSucursal() {
    console.log('se trato de crear');
  }
  limpiarSucursal() {

  }
}
