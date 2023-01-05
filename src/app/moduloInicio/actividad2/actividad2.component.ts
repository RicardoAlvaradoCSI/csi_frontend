import { UsuariosModel } from './../../modelos/tblActividad1.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad2',
  templateUrl: './actividad2.component.html',
  styleUrls: ['./actividad2.component.css']
})
export class Actividad2Component implements OnInit {

newUser = new UsuariosModel();

  constructor() { }

  ngOnInit() {
  }

}
