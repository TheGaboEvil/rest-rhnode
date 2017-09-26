import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

import {MdIconModule, MdInputModule,  MdButtonModule, MdButtonToggleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdIconModule,
    MdButtonModule,
    MdButtonToggleModule,

  ],
  declarations: [AgregarComponent, BuscarComponent, ModificarComponent, EliminarComponent]
})
export class PlanillaempleadoModule { }
