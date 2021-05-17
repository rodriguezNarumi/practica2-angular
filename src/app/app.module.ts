import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { descripcionComponent } from './descripcionCSS/descripcioncss.component';
import { descripcion1Component } from './descripcionJS/descripcionjs.component';
import { descripcion2Component } from './descripcionHTML/descripcionhtml.component';
import { descripcion3Component } from './descripcionTS/descripcionts.component';

@NgModule({
  declarations: [
    AppComponent,
    descripcionComponent,
    descripcion1Component,
    descripcion2Component,
    descripcion3Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
