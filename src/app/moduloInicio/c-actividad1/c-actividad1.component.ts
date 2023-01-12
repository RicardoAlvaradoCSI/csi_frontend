import { NgxSpinnerService } from 'ngx-spinner';
import { UsuariosModel } from './../../modelos/tblActividad1.model';
import { Component, OnInit } from '@angular/core';
import { UsuariosSerService } from 'src/app/Servicios/usuarios-ser.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actividad2Component } from '../actividad2/actividad2.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c-actividad1',
  templateUrl: './c-actividad1.component.html',
  styleUrls: ['./c-actividad1.component.css']
})
export class CActividad1Component implements OnInit {

user:UsuariosModel[]= [];
newUser = new UsuariosModel();

//newUser = new UsuariosModel();

  constructor(private conexionServ : UsuariosSerService, private router:Router, private regresar:Router, private modalService: NgbModal ,private spinner: NgxSpinnerService,) { }

  ngOnInit() {
    this.getUsuarios()
  }

  metodoRegresar(){
    this.regresar.navigate(['/user'])

  }

  //
  newUsuario(){
    this.router.navigate(['/user/act'])
  }

  getUsuarios(){
    // this.spinner.show();
    this.conexionServ.getUsuarios().subscribe((res: any)=>{
      if(res.status==200){
       // console.log('Respuesta del back',res)
        this.user=res.response;
      }else{
        this.user=[]
      }
      // this.spinner.h
     })
  }


  verUsuarios(user:any){
    var idSistem = 1;
    // this.newUser = user;
    const modalRef = this.modalService.open(Actividad2Component, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
      size: 'xl' as any,
      // backdrop: false,
    });
    modalRef.componentInstance.setUsuarios(user, idSistem);
    modalRef.result.then(result => {
      if (result == 1) {
      }
    }).catch(error => {
    });
  }


  alerta(){
    Swal.fire('Atencion','Esta es una alerta','success')
  }




}
