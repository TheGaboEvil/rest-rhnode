import { Component, OnInit } from '@angular/core';
import { Departamento } from '../departamento';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  public departamento: Departamento;
  constructor() {
    this.departamento = new Departamento(' ', ' ', ' ', '');
   }

  ngOnInit() {
  }

  crearDepartamento() {
    // todo
  }

  limpiarDepartamento() {
    // todo
  }

}
