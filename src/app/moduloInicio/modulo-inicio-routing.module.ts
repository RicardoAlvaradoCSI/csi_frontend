import { LoginComponent } from './login/login.component';

import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { CActividad1Component } from './c-actividad1/c-actividad1.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Actividad2Component } from './actividad2/actividad2.component';


const routes: Routes = [

  {path:'',component: LoginComponent},
  {path:'a',component: CActividad1Component},
  {path:'act',component: Actividad2Component},
  {path:'colaboradores/:id',component: ColaboradoresComponent},
  {path:'colaborador',component: ColaboradorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloInicioRoutingModule { }
