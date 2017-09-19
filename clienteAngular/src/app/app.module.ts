import { RequerimientosplazaModule } from './requerimientosplaza/requerimientosplaza.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* librerias para material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

/* nuestros modulos */
import { AdelantosempleadosModule } from './adelantosempleados/adelantosempleados.module';
import { AgendaempleadoModule } from './agendaempleado/agendaempleado.module';
import { AsistenciaempleadoModule } from './asistenciaempleado/asistenciaempleado.module';
import { CandidatosModule } from './candidatos/candidatos.module';
import { CandidatosevaluacionesModule } from './candidatosevaluaciones/candidatosevaluaciones.module';
import { ConfrentaModule } from './confrenta/confrenta.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { DescuentosautomaticosModule } from './descuentosautomaticos/descuentosautomaticos.module';
import { CatalogoplanillaModule } from './catalogoplanilla/catalogoplanilla.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { EvaluacionescandidatosModule } from './evaluacionescandidatos/evaluacionescandidatos.module';
import { FuncionesplazaModule } from './funcionesplaza/funcionesplaza.module';
import { LoginModule } from './login/login.module';
import { PerfilplazaModule } from './perfilplaza/perfilplaza.module';
import { PlanillaModule } from './planilla/planilla.module';
import { PlanillaempleadoModule } from './planillaempleado/planillaempleado.module';
import { SucursalesModule } from './sucursales/sucursales.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    // material.io
    BrowserAnimationsModule,
    MaterialModule,
    // nuestros modulos
    AdelantosempleadosModule,
    AgendaempleadoModule,
    AsistenciaempleadoModule,
    CandidatosModule,
    CandidatosevaluacionesModule,
    CatalogoplanillaModule,
    ConfrentaModule,
    DepartamentosModule,
    DescuentosautomaticosModule,
    EmpleadosModule,
    EvaluacionescandidatosModule,
    FuncionesplazaModule,
    LoginModule,
    PerfilplazaModule,
    PlanillaModule,
    PlanillaempleadoModule,
    RequerimientosplazaModule,
    SucursalesModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
