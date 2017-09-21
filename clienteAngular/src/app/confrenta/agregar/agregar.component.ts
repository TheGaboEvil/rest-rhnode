import { Component, OnInit } from '@angular/core';
import { Confrenta } from '../confrenta';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public confrenta: Confrenta;

  constructor() { }

  ngOnInit() {
  }

  crearConfRenta() {
    // todo
  }

  limpiarConfRenta() {
    // todo
  }
}
