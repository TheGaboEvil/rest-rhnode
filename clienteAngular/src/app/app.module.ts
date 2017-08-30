import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//lista de material
import {MdInputModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CrearSucursalComponent } from './crear-sucursal/crear-sucursal.component';
import { CrearDepartamentoComponent } from './crear-departamento/crear-departamento.component';
import { ListaDepartamentoComponent } from './lista-departamento/lista-departamento.component';
import { ListaSucursalComponent } from './lista-sucursal/lista-sucursal.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearSucursalComponent,
    CrearDepartamentoComponent,
    ListaDepartamentoComponent,
    ListaSucursalComponent,
    ListaEmpleadoComponent,
    CrearEmpleadoComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MdInputModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
