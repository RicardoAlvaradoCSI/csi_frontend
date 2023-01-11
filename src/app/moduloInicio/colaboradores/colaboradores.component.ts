import { AddObjetosService } from './../../Servicios/add-objetos.service';
import { ColaboradorService } from 'src/app/Servicios/colaborador.service';
import { Colaboradores, listas } from './../../modelos/tblActividad1.model';
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

  activarTable = 'active'
  mostrarColaboradores:Colaboradores[]= [];
  mostrarLista:listas[]= [];
  newLista = new listas();


  nomUser = '';
  visto = true;
  visto2 = false;
  visto3 = false;


  contUser = 0

  constructor( private router:Router,private conexionServ : ColaboradorService, private conexcioServListas: AddObjetosService ) { }

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
      this.contUser = this.mostrarColaboradores.length;
      console.log("lista",this.mostrarColaboradores);

    })
  }
  newColaborador(){
    this.router.navigate(['/user/colaborador'])
  }


  verArchivo(idU) {
    this.nomUser = idU.nombre;

    $("#archivoAdjunto").modal('show');//mostramos el modal
    this.conexionServ.pdfColaborador(idU.id).subscribe((response: any) => {
      console.log("archivos",response);
      const url = URL.createObjectURL(response);
      window.open(url, 'iFrameADJNAFEC');
    }, error => {
      Swal.fire('Atención', 'Se detecto un error al obtener el archivo', 'warning');
    });

  }

  ver(){
    this.visto = true;
    this.visto2 = false;
    this.visto3 = false;
  }

  ver2(){
    this.visto2 = true;
    this.visto = false;
    this.visto3 = false;
  }

  ver3(){
    this.visto3 = true;
    this.visto2 = false;
    this.visto = false;
  }

  addLista(){

    if(this.newLista.nombre == null){
      Swal.fire("atencion","llenar campo: nombre","warning");
    }else if(this.newLista.numero == null){
      Swal.fire("atencion","llenar campo: numero" ,"warning");
    }else if(this.newLista.equipo == null){
      Swal.fire("atencion","llenar campo: equipo" ,"warning");
    }else{
      this.mostrarLista.push(this.newLista);
      this.newLista = new listas();
    }
   console.log("listas",this.mostrarLista);

  }




  elimarElementosListas(fila){

    var ii = this.mostrarLista.indexOf(fila);
    this.mostrarLista.splice(ii, 1);

   console.log("eliminandolista",this.mostrarLista);


  }



  guardarListas(){
    this.conexcioServListas.newLista(this.mostrarLista).subscribe((res: any) => {
      Swal.fire('Atención', 'Se detecto un error al obtener el archivo', 'warning');
      console.log('sd',res);

    });


  }

}
