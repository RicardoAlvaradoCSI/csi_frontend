import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloInicioRoutingModule } from './modulo-inicio-routing.module';
import { CActividad1Component } from './c-actividad1/c-actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { RolesComponent } from './roles/roles.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [CActividad1Component, Actividad2Component, ColaboradoresComponent, RolesComponent, ColaboradorComponent],
  imports: [
    CommonModule,
    ModuloInicioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   NgbModule,
   NgxSpinnerModule,
   NgSelectModule
  ],
  entryComponents:[ColaboradoresComponent],
  providers:[NgxSpinnerService]
})
export class ModuloInicioModule { }
