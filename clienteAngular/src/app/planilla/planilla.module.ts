import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgregarComponent, BuscarComponent, ModificarComponent, EliminarComponent]
})
export class PlanillaModule { }
