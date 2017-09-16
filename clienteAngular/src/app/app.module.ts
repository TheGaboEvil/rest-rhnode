import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// lista de material
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

import 'hammerjs';

import {FlexLayoutModule} from '@angular/flex-layout';

import {SucursalesModule} from './sucursales/sucursales.module';
import {DepartamentosModule} from './departamentos/departamentos.module';

import { MenuComponent } from './menu/menu.component';
import { OpcionActualComponent } from './opcion-actual/opcion-actual.component';

import { CrearComponent as CrearSucursal } from './sucursales/crear/crear.component';
import { ListarComponent as ListarSucursal} from './sucursales/listar/listar.component';
import { CrearComponent as CrearDepartamento } from './departamentos/crear/crear.component';
import { ListarComponent as ListarDepartamento} from './departamentos/listar/listar.component';

const appRoutes: Routes = [
  {path: 'sucursales/crear', component: CrearSucursal},
  {path: 'sucursales/listar', component: ListarSucursal},
  {path: 'departamentos/crear', component: CrearDepartamento},
  {path: 'departamentos/listar', component: ListarDepartamento}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OpcionActualComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    MdGridListModule,
    MdSidenavModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    SucursalesModule,
    DepartamentosModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
