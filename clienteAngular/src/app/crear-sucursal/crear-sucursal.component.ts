import { Component, OnInit } from '@angular/core';
import { CrearSucursal } from './crear-sucursal';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {
  crearSucursal = new CrearSucursal('', '', '', '', '', '', '', '');
  constructor() { }

  ngOnInit() {
  }
}
