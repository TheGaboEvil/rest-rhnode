import { Component, OnInit } from '@angular/core';
import { Catalogoplanilla } from '../catalogoplanilla';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  public catalogoplanilla: Catalogoplanilla;

  constructor() { }

  ngOnInit() {
  }

  crearCatalogoPlanilla() {
    // todo
  }

  limpiarCatalogoPlanilla() {
    // todo
  }

}
