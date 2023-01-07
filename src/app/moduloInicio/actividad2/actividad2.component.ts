import { UsuariosModel } from './../../modelos/tblActividad1.model';
import { Component, OnInit } from '@angular/core';
import { UsuariosSerService } from 'src/app/Servicios/usuarios-ser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad2',
  templateUrl: './actividad2.component.html',
  styleUrls: ['./actividad2.component.css']
})
export class Actividad2Component implements OnInit {

newUser = new UsuariosModel();
idSistema = 0

  constructor(private conexionServ : UsuariosSerService) { }

  ngOnInit() {

  }

  validaCreacion(){

    Swal.fire({
      title: 'Estas seguro de registrar a ' +this.newUser.Nombre +'?',
      icon:'question',
      showCancelButton: true,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        this.creaUser();
      }
    })

  }


  creaUser(){
    console.log('entre al met');
     console.log('Este es el numero', this.newUser);

     this.conexionServ.newUser(this.newUser).subscribe((res: any)=>{
       if(res.status == 200){
        Swal.fire('Alerta','El usuario se registro correctamente','success')
         console.log('resp' , res.response);
       }else{

       }
     })
    //  this.regresar.navigate(['/user'])

   }

   setUsuarios(usuarioinfo:any, idSistema){
    console.log('ESTE ES EL ID DEL SISTEMA', idSistema);
this.idSistema = idSistema

    if(idSistema == 1){
      this.newUser = usuarioinfo;

    }


   }

}
