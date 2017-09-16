import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// lista de material
import {MdInputModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';

import 'hammerjs';

import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
