import { RequerimientosplazaModule } from './requerimientosplaza/requerimientosplaza.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* librerias para estructura y themplate en base a material.io */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  } from '@angular/material';

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
/* para la navegacion de nuestra app */
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

/* libreria para usar rutas en el menu  */
import { RouterModule, Routes } from '@angular/router';

/* importamos los componendes de los modulos para ser llamados desde el menu */

import { AgregarComponent as AgendaempleadoAgregar } from './agendaempleado/agregar/agregar.component';
import { BuscarComponent as AgendaempleadoBuscar } from './agendaempleado/buscar/buscar.component';
import { ModificarComponent as AgendaempleadoModificar } from './agendaempleado/modificar/modificar.component';
import { EliminarComponent as AgendaempleadoEliminar } from './agendaempleado/eliminar/eliminar.component';
import { AgregarComponent as AdelantosempleadosAgregar } from './adelantosempleados/agregar/agregar.component';
import { BuscarComponent as AdelantosempleadosBuscar } from './adelantosempleados/buscar/buscar.component';
import { ModificarComponent as AdelantosempleadosModificar } from './adelantosempleados/modificar/modificar.component';
import { EliminarComponent as AdelantosempleadosEliminar } from './adelantosempleados/eliminar/eliminar.component';
import { AgregarComponent as AsistenciaempleadoAgregar } from './asistenciaempleado/agregar/agregar.component';
import { BuscarComponent as AsistenciaempleadoBuscar } from './asistenciaempleado/buscar/buscar.component';
import { ModificarComponent as AsistenciaempleadoModificar } from './asistenciaempleado/modificar/modificar.component';
import { EliminarComponent as AsistenciaempleadoEliminar } from './asistenciaempleado/eliminar/eliminar.component';
import { AgregarComponent as CandidatosAgregar } from './candidatos/agregar/agregar.component';
import { BuscarComponent as CandidatosBuscar } from './candidatos/buscar/buscar.component';
import { ModificarComponent as CandidatosModificar } from './candidatos/modificar/modificar.component';
import { EliminarComponent as CandidatosEliminar } from './candidatos/eliminar/eliminar.component';
import { AgregarComponent as CandidatosevaluacionesAgregar } from './candidatosevaluaciones/agregar/agregar.component';
import { BuscarComponent as CandidatosevaluacionesBuscar } from './candidatosevaluaciones/buscar/buscar.component';
import { ModificarComponent as CandidatosevaluacionesModificar } from './candidatosevaluaciones/modificar/modificar.component';
import { EliminarComponent as CandidatosevaluacionesEliminar } from './candidatosevaluaciones/eliminar/eliminar.component';
import { AgregarComponent as CatalogoplanillaAgregar } from './catalogoplanilla/agregar/agregar.component';
import { BuscarComponent as CatalogoplanillaBuscar } from './catalogoplanilla/buscar/buscar.component';
import { ModificarComponent as CatalogoplanillaModificar } from './catalogoplanilla/modificar/modificar.component';
import { EliminarComponent as CatalogoplanillaEliminar } from './catalogoplanilla/eliminar/eliminar.component';
import { AgregarComponent as ConfrentaAgregar } from './confrenta/agregar/agregar.component';
import { BuscarComponent as ConfrentaBuscar } from './confrenta/buscar/buscar.component';
import { ModificarComponent as ConfrentaModificar } from './confrenta/modificar/modificar.component';
import { EliminarComponent as ConfrentaEliminar } from './confrenta/eliminar/eliminar.component';
import { AgregarComponent as DepartamentosAgregar } from './departamentos/agregar/agregar.component';
import { BuscarComponent as DepartamentosBuscar } from './departamentos/buscar/buscar.component';
import { ModificarComponent as DepartamentosModificar } from './departamentos/modificar/modificar.component';
import { EliminarComponent as DepartamentosEliminar } from './departamentos/eliminar/eliminar.component';
import { AgregarComponent as DescuentosautomaticosAgregar } from './descuentosautomaticos/agregar/agregar.component';
import { BuscarComponent as DescuentosautomaticosBuscar } from './descuentosautomaticos/buscar/buscar.component';
import { ModificarComponent as DescuentosautomaticosModificar } from './descuentosautomaticos/modificar/modificar.component';
import { EliminarComponent as DescuentosautomaticosEliminar } from './descuentosautomaticos/eliminar/eliminar.component';
import { AgregarComponent as EmpleadosAgregar } from './empleados/agregar/agregar.component';
import { BuscarComponent as EmpleadosBuscar } from './empleados/buscar/buscar.component';
import { ModificarComponent as EmpleadosModificar } from './empleados/modificar/modificar.component';
import { EliminarComponent as EmpleadosEliminar } from './empleados/eliminar/eliminar.component';
import { AgregarComponent as EvaluacionescandidatosAgregar } from './evaluacionescandidatos/agregar/agregar.component';
import { BuscarComponent as EvaluacionescandidatosBuscar } from './evaluacionescandidatos/buscar/buscar.component';
import { ModificarComponent as EvaluacionescandidatosModificar } from './evaluacionescandidatos/modificar/modificar.component';
import { EliminarComponent as EvaluacionescandidatosEliminar } from './evaluacionescandidatos/eliminar/eliminar.component';
import { AgregarComponent as FuncionesplazaAgregar } from './funcionesplaza/agregar/agregar.component';
import { BuscarComponent as FuncionesplazaBuscar } from './funcionesplaza/buscar/buscar.component';
import { ModificarComponent as FuncionesplazaModificar } from './funcionesplaza/modificar/modificar.component';
import { EliminarComponent as FuncionesplazaEliminar } from './funcionesplaza/eliminar/eliminar.component';
import { AgregarComponent as LoginAgregar } from './login/agregar/agregar.component';
import { BuscarComponent as LoginBuscar } from './login/buscar/buscar.component';
import { ModificarComponent as LoginModificar } from './login/modificar/modificar.component';
import { EliminarComponent as LoginEliminar } from './login/eliminar/eliminar.component';
import { AgregarComponent as PerfilplazaAgregar } from './perfilplaza/agregar/agregar.component';
import { BuscarComponent as PerfilplazaBuscar } from './perfilplaza/buscar/buscar.component';
import { ModificarComponent as PerfilplazaModificar } from './perfilplaza/modificar/modificar.component';
import { EliminarComponent as PerfilplazaEliminar } from './perfilplaza/eliminar/eliminar.component';
import { AgregarComponent as PlanillaAgregar } from './planilla/agregar/agregar.component';
import { BuscarComponent as PlanillaBuscar } from './planilla/buscar/buscar.component';
import { ModificarComponent as PlanillaModificar } from './planilla/modificar/modificar.component';
import { EliminarComponent as PlanillaEliminar } from './planilla/eliminar/eliminar.component';
import { AgregarComponent as PlanillaempleadoAgregar } from './planillaempleado/agregar/agregar.component';
import { BuscarComponent as PlanillaempleadoBuscar } from './planillaempleado/buscar/buscar.component';
import { ModificarComponent as PlanillaempleadoModificar } from './planillaempleado/modificar/modificar.component';
import { EliminarComponent as PlanillaempleadoEliminar } from './planillaempleado/eliminar/eliminar.component';
import { AgregarComponent as RequerimientosplazaAgregar } from './requerimientosplaza/agregar/agregar.component';
import { BuscarComponent as RequerimientosplazaBuscar } from './requerimientosplaza/buscar/buscar.component';
import { ModificarComponent as RequerimientosplazaModificar } from './requerimientosplaza/modificar/modificar.component';
import { EliminarComponent as RequerimientosplazaEliminar } from './requerimientosplaza/eliminar/eliminar.component';
import { AgregarComponent as SucursalesAgregar } from './sucursales/agregar/agregar.component';
import { BuscarComponent as SucursalesBuscar } from './sucursales/buscar/buscar.component';
import { ModificarComponent as SucursalesModificar } from './sucursales/modificar/modificar.component';
import { EliminarComponent as SucursalesEliminar } from './sucursales/eliminar/eliminar.component';
import { AgregarComponent as UsuariosAgregar } from './usuarios/agregar/agregar.component';
import { BuscarComponent as UsuariosBuscar } from './usuarios/buscar/buscar.component';
import { ModificarComponent as UsuariosModificar } from './usuarios/modificar/modificar.component';
import { EliminarComponent as UsuariosEliminar } from './usuarios/eliminar/eliminar.component';

/* rutas para el menu */
const appRouters: Routes = [
  { path: 'agendaempleado/agregar' , component: AgendaempleadoAgregar },
  { path: 'agendaempleado/buscar' , component: AgendaempleadoBuscar },
  { path: 'agendaempleado/modificar' , component: AgendaempleadoModificar },
  { path: 'agendaempleado/eliminar' , component: AgendaempleadoEliminar },
  { path: 'adelantosempleados/agregar' , component: AdelantosempleadosAgregar },
  { path: 'adelantosempleados/buscar' , component: AdelantosempleadosBuscar },
  { path: 'adelantosempleados/modificar' , component: AdelantosempleadosModificar },
  { path: 'adelantosempleados/eliminar' , component: AdelantosempleadosEliminar },
  { path: 'asistenciaempleado/agregar' , component: AsistenciaempleadoAgregar },
  { path: 'asistenciaempleado/buscar' , component: AsistenciaempleadoBuscar },
  { path: 'asistenciaempleado/modificar' , component: AsistenciaempleadoModificar },
  { path: 'asistenciaempleado/eliminar' , component: AsistenciaempleadoEliminar },
  { path: 'candidatos/agregar' , component: CandidatosAgregar },
  { path: 'candidatos/buscar' , component: CandidatosBuscar },
  { path: 'candidatos/modificar' , component: CandidatosModificar },
  { path: 'candidatos/eliminar' , component: CandidatosEliminar },
  { path: 'candidatosevaluaciones/agregar' , component: CandidatosevaluacionesAgregar },
  { path: 'candidatosevaluaciones/buscar' , component: CandidatosevaluacionesBuscar },
  { path: 'candidatosevaluaciones/modificar' , component: CandidatosevaluacionesModificar },
  { path: 'candidatosevaluaciones/eliminar' , component: CandidatosevaluacionesEliminar },
  { path: 'catalogoplanilla/agregar' , component: CatalogoplanillaAgregar },
  { path: 'catalogoplanilla/buscar' , component: CatalogoplanillaBuscar },
  { path: 'catalogoplanilla/modificar' , component: CatalogoplanillaModificar },
  { path: 'catalogoplanilla/eliminar' , component: CatalogoplanillaEliminar },
  { path: 'confrenta/agregar' , component: ConfrentaAgregar },
  { path: 'confrenta/buscar' , component: ConfrentaBuscar },
  { path: 'confrenta/modificar' , component: ConfrentaModificar },
  { path: 'confrenta/eliminar' , component: ConfrentaEliminar },
  { path: 'departamentos/agregar' , component: DepartamentosAgregar },
  { path: 'departamentos/buscar' , component: DepartamentosBuscar },
  { path: 'departamentos/modificar' , component: DepartamentosModificar },
  { path: 'departamentos/eliminar' , component: DepartamentosEliminar },
  { path: 'descuentosautomaticos/agregar' , component: DescuentosautomaticosAgregar },
  { path: 'descuentosautomaticos/buscar' , component: DescuentosautomaticosBuscar },
  { path: 'descuentosautomaticos/modificar' , component: DescuentosautomaticosModificar },
  { path: 'descuentosautomaticos/eliminar' , component: DescuentosautomaticosEliminar },
  { path: 'empleados/agregar' , component: EmpleadosAgregar },
  { path: 'empleados/buscar' , component: EmpleadosBuscar },
  { path: 'empleados/modificar' , component: EmpleadosModificar },
  { path: 'empleados/eliminar' , component: EmpleadosEliminar },
  { path: 'evaluacionescandidatos/agregar' , component: EvaluacionescandidatosAgregar },
  { path: 'evaluacionescandidatos/buscar' , component: EvaluacionescandidatosBuscar },
  { path: 'evaluacionescandidatos/modificar' , component: EvaluacionescandidatosModificar },
  { path: 'evaluacionescandidatos/eliminar' , component: EvaluacionescandidatosEliminar },
  { path: 'funcionesplaza/agregar' , component: FuncionesplazaAgregar },
  { path: 'funcionesplaza/buscar' , component: FuncionesplazaBuscar },
  { path: 'funcionesplaza/modificar' , component: FuncionesplazaModificar },
  { path: 'funcionesplaza/eliminar' , component: FuncionesplazaEliminar },
  { path: 'login/agregar' , component: LoginAgregar },
  { path: 'login/buscar' , component: LoginBuscar },
  { path: 'login/modificar' , component: LoginModificar },
  { path: 'login/eliminar' , component: LoginEliminar },
  { path: 'perfilplaza/agregar' , component: PerfilplazaAgregar },
  { path: 'perfilplaza/buscar' , component: PerfilplazaBuscar },
  { path: 'perfilplaza/modificar' , component: PerfilplazaModificar },
  { path: 'perfilplaza/eliminar' , component: PerfilplazaEliminar },
  { path: 'planilla/agregar' , component: PlanillaAgregar },
  { path: 'planilla/buscar' , component: PlanillaBuscar },
  { path: 'planilla/modificar' , component: PlanillaModificar },
  { path: 'planilla/eliminar' , component: PlanillaEliminar },
  { path: 'planillaempleado/agregar' , component: PlanillaempleadoAgregar },
  { path: 'planillaempleado/buscar' , component: PlanillaempleadoBuscar },
  { path: 'planillaempleado/modificar' , component: PlanillaempleadoModificar },
  { path: 'planillaempleado/eliminar' , component: PlanillaempleadoEliminar },
  { path: 'requerimientosplaza/agregar' , component: RequerimientosplazaAgregar },
  { path: 'requerimientosplaza/buscar' , component: RequerimientosplazaBuscar },
  { path: 'requerimientosplaza/modificar' , component: RequerimientosplazaModificar },
  { path: 'requerimientosplaza/eliminar' , component: RequerimientosplazaEliminar },
  { path: 'sucursales/agregar' , component: SucursalesAgregar },
  { path: 'sucursales/buscar' , component: SucursalesBuscar },
  { path: 'sucursales/modificar' , component: SucursalesModificar },
  { path: 'sucursales/eliminar' , component: SucursalesEliminar },
  { path: 'usuarios/agregar' , component: UsuariosAgregar },
  { path: 'usuarios/buscar' , component: UsuariosBuscar },
  { path: 'usuarios/modificar' , component: UsuariosModificar },
  { path: 'usuarios/eliminar' , component: UsuariosEliminar }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent

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
    UsuariosModule,
    // agregamos rutas de navegacion
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
