import { Component, OnInit } from '@angular/core';

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
      in_codsucursal : this.in_codsucursal;
      in_direccion : this.in_direccion;
      in_ciudad : this.in_ciudad;
      in_departamento : this.in_departamento;
      in_pais : this.in_pais;
      in_codigopostal : this.in_codigopostal;
      in_telefono : this.in_telefono ;
      in_coordenadas : this.in_coordenadas;
    } // fin de la constante datos


  } // fin de la funcion postCrear

}
