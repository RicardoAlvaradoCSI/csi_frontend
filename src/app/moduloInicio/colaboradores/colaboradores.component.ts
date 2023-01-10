import { ColaboradorService } from 'src/app/Servicios/colaborador.service';
import { Colaboradores } from './../../modelos/tblActividad1.model';
import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
declare var $

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  mostrarColaboradores:Colaboradores[]= [];

  constructor( private router:Router,private conexionServ : ColaboradorService) { }

  ngOnInit() {
    this.verListaColaboradores();
  }

  // changeSelect(e:any){

  //   console.log("e",e);
  //   if(e){
  //     Swal.fire("Titulo",e.nombre,"warning");
  //   }
  //   console.log("select",this.selectOpcion);
  // }

  verListaColaboradores(){
    this.conexionServ.verColaboradores().subscribe((res: any)=>{
      this.mostrarColaboradores = res.response;
      console.log("lista",this.mostrarColaboradores);
  })
  }
  newColaborador(){
    this.router.navigate(['/user/colaborador'])
  }


  verArchivo(idU) {

    $("#archivoAdjunto").modal('show');//mostramos el modal
    this.conexionServ.pdfColaborador(idU).subscribe((response: any) => {
      const url = URL.createObjectURL(response);
      window.open(url, 'iFrameADJNAFEC');
    }, error => {
      Swal.fire('Atención', 'Se detecto un error al obtener el archivo', 'warning');
    });

  }

}
