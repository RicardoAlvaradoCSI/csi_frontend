import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'user', loadChildren: () => import('../app/moduloInicio/modulo-inicio.module').then(i => i.ModuloInicioModule) },

{
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full'
 }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
