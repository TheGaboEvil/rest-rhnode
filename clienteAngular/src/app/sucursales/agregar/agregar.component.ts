import { Component, OnInit } from '@angular/core';

import { Sucursal } from '../sucursal';
import { SucursalService } from '../sucursal.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public sucursal: Sucursal;


  constructor(private sucursalService: SucursalService) {
    this.sucursal = new Sucursal(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ');
   }

  ngOnInit() {
  }
  crearSucursal(sucursal: Sucursal): void {
    this.sucursalService.crearSucursal(sucursal);
    console.log('se creo sucursal');
  }
  limpiarSucursal() {

  }
}
