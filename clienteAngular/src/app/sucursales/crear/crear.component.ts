import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../sucursal';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public sucursal: Sucursal;

  constructor() {
    this.sucursal = new  Sucursal('', '', '', '', '', '', '', '')
   }

  ngOnInit() {
  }
}
