import { Component, OnInit } from '@angular/core';
import {crearSucursal} from './crearSucursal';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postCrear(in_codsucursal,in_direccion,in_ciudad,in_departamento,in_pais,in_codigopostal,in_telefono,in_coordenadas){
    const datos = {
      in_codsucursal : in_codsucursal,
      in_direccion : in_direccion,
      in_ciudad : in_ciudad,
      in_departamento : in_departamento,
      in_pais : in_pais,
      in_codigopostal : in_codigopostal,
      in_telefono : in_telefono,
      in_coordenadas : in_coordenadas
    } // fin de la constante datos


  } // fin de la funcion postCrear

}
