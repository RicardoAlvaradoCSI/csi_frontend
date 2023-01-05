import { UsuariosModel } from './../../modelos/tblActividad1.model';
import { Component, OnInit } from '@angular/core';
import { UsuariosSerService } from 'src/app/Servicios/usuarios-ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-actividad1',
  templateUrl: './c-actividad1.component.html',
  styleUrls: ['./c-actividad1.component.css']
})
export class CActividad1Component implements OnInit {

user:UsuariosModel[]= [];

//newUser = new UsuariosModel();

  constructor(private conexionServ : UsuariosSerService, private router:Router, private regresar:Router) { }

  ngOnInit() {
    this.user =[]

    this.user =[
      {
        Id:1,
        Numero:10,
        Nombre:'Ricardo',
        Descripcion:'pruebas',
        Default:12,
      },{
        Id:2,
        Numero:10,
        Nombre:'Ricardo',
        Descripcion:'pruebas',
        Default:12,
      }

    ]
    console.log('arreglo',this.user)
  }

  metodo(){
   /* console.log('entre al met');
    console.log('Este es el numero', this.newUser);

    this.conexionServ.newUser(this.user).subscribe((res: any)=>{
      if(res.status == 200){
        console.log('resp' , res.response);
      }else{
      }
    })*/
    this.regresar.navigate(['/user'])

  }

  //
  newUsuario(){
    this.router.navigate(['/user/act'])
  }

}
