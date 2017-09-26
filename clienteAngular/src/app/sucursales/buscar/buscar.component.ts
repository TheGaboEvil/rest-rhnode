import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Sucursal } from '../sucursal';
import { SucursalService } from '../sucursal.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  sucursal: Sucursal;
  sucursales: Sucursal[];
  selectSucursal: Sucursal;

  constructor(
    private sucursalService: SucursalService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.sucursalService.getSucursales().then(sucursal => this.sucursales = sucursal);
  }

}
