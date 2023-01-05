import { CActividad1Component } from './c-actividad1/c-actividad1.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Actividad2Component } from './actividad2/actividad2.component';


const routes: Routes = [

  {path:'',component: CActividad1Component},
  {path:'act',component: Actividad2Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloInicioRoutingModule { }
