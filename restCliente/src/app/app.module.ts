import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GetNodetestComponent } from './nodetest/get-nodetest.component';

import {NodetestService} from './nodetest.service';
import { CrearNodetestComponent } from './crear-nodetest/crear-nodetest.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GetNodetestComponent,
    CrearNodetestComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [NodetestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
