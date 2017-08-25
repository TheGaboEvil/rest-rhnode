import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { GetNodetestComponent } from './nodetest/get-nodetest.component';

import {NodetestService} from './nodetest.service';

//definendo rutas
const ROUTES = [
  {
    path: '',
    redirectTo: 'nodetest_',
    pathMatch: 'full'
  },
  {
    path: 'nodetest_',
    component: GetNodetestComponent
  }
];
// fin de rutas
@NgModule({
  declarations: [
    AppComponent,
    GetNodetestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [NodetestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
