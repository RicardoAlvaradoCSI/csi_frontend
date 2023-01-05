import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloInicioRoutingModule } from './modulo-inicio-routing.module';
import { CActividad1Component } from './c-actividad1/c-actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CActividad1Component, Actividad2Component],
  imports: [
    CommonModule,
    ModuloInicioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   NgbModule



  ]
})
export class ModuloInicioModule { }
