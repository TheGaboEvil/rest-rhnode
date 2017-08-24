import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { GetNodetestComponent } from './get-nodetest/get-nodetest.component';
//definendo rutas
const ROUTES = [
  {
    path: 'nodetest',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'nodetest',
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
