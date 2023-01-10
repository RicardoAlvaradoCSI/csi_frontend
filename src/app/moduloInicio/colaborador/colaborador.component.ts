
import { roles } from './../../modelos/tblActividad1.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesServiceService } from 'src/app/Servicios/roles-service.service';
import Swal from "sweetalert2";

import { ColaboradorService } from 'src/app/Servicios/colaborador.service';
import { Colaboradores } from "./../../modelos/tblActividad1.model";


class Archivo{
  nombreArchivo?:string;
  base64textString?:string;
}
@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

archivo = new Archivo();
  selectNombre : string;
  selectRoles:roles[]= [];
  newColaborador1 = new Colaboradores();

  constructor(private router:Router,private conexionServ : RolesServiceService,private conexionServC : ColaboradorService) { }

  ngOnInit() {
    this.getRoles();
    }




  getRoles(){

    this.conexionServ.getRoles().subscribe((res: any)=>{
      console.log("ddf",res);
        this.selectRoles=res.response;
        console.log("imp",this.selectRoles);
     })
  }
  setColaborador(){

    // this.newColaborador1.folio = '1';
    this.newColaborador1.departamento = '1';
    this.newColaborador1.doc_index = '';

    this.newColaborador1.doc_index = this.archivo.nombreArchivo;
    this.newColaborador1.image = this.archivo.base64textString;

    this.conexionServC.newColaborador(this.newColaborador1).subscribe((res: any) => {
      console.log("respuesta",res);

      if (res.status == 200) {
        // Swal.fire("Alerta", "El usuario se registro correctamente", "success");
        console.log("resp", res.response);
      } else {
      }
      // this.spinner.hide();
    });

  }

  cambiaColaborador(){
    this.router.navigate(['/user/colaborador'])
  }


  seleccionarArchivoAV(event) {
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoadedAV.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoadedAV(readerEvent) {
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }



}
