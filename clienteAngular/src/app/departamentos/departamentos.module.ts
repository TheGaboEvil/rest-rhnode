import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrearComponent, ListarComponent]
})
export class DepartamentosModule { }
