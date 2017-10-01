import { Component, OnInit } from '@angular/core';

import {MatSelectModule} from '@angular/material';

import { Departamento } from '../departamento';
import { DepartamentoService } from '../departamento.service';



import { SucursalService } from '../../sucursales/sucursal.service';
import { Sucursal } from '../../sucursales/sucursal';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public departamento: Departamento;
  public sucursales: Sucursal[];

  constructor(
    private sucursalService: SucursalService,
    private departamentoService: DepartamentoService
  ) {
    this.departamento = new Departamento(' ', ' ', ' ', '');
   }

  ngOnInit() {
    this.sucursalService.getSucursales().then(sucursales => this.sucursales = sucursales);
  }

  crearDepartamento(departamento: Departamento) {
    this.departamentoService.crearDepartamento(departamento);
  }

  limpiarDepartamento() {
    // todo
  }

}
