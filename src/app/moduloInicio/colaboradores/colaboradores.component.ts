import { LoginService } from './../../Servicios/login.service';
import { AddObjetosService } from "../../Servicios/add-objetos.service";
import { ColaboradorService } from "src/app/Servicios/colaborador.service";
import { Colaboradores, listas } from "../../modelos/tblActividad1.model";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import { roles } from "../../modelos/tblActividad1.model";
import { RolesServiceService } from "src/app/Servicios/roles-service.service";
declare var $;

class Archivo {
  nombre?: string;
  base64?: string;
}
@Component({
  selector: "app-colaboradores",
  templateUrl: "./colaboradores.component.html",
  styleUrls: ["./colaboradores.component.css"],
})
export class ColaboradoresComponent implements OnInit {
  activarTable = "active";
  mostrarColaboradores: Colaboradores[] = [];
  mostrarLista: listas[] = [];
  newLista = new listas();
  selectRoles: roles[] = [];
  newColaborador1 = new Colaboradores();
  archivo = new Archivo();
  pass="";
  tipoBtnVerClave="password";

  nomUser = "";
  visto = true;
  visto2 = false;
  visto3 = false;
  visto4 = false;
  info_C = true;
  doc_C = false;
  activaTab = false;
  sesionUsuario : any;

  contUser = 0;

  constructor(
    private router: Router,
    private conexionServ: ColaboradorService,
    private conexcioServListas: AddObjetosService,
    private conexionServC: ColaboradorService,
    private conexionServRol: RolesServiceService,
    private rutaP: ActivatedRoute,
    private conSerSesion : LoginService
  ) {}

  ngOnInit() {
    this.verListaColaboradores();
    this.getRoles();

    // var parametro = this.rutaP.snapshot.params;
    this.sesionUsuario = this.rutaP.snapshot.params;


    console.log("parametros", this.sesionUsuario);
  }


  // changeSelect(e:any){
  //   console.log("e",e);
  //   if(e){
  //     Swal.fire("Titulo",e.nombre,"warning");
  //   }
  //   console.log("select",this.selectOpcion);
  // }

  verListaColaboradores() {
    this.conexionServ.verColaboradores().subscribe((res: any) => {
      this.mostrarColaboradores = res.response;
      this.contUser = this.mostrarColaboradores.length;
      console.log("lista", this.mostrarColaboradores);
    });
  }
  newColaborador() {
    this.router.navigate(["/user/colaborador"]);
  }

  verArchivo(idU) {
    this.nomUser = idU.nombre;

    $("#archivoAdjunto").modal("show"); //mostramos el modal
    this.conexionServ.pdfColaborador(idU.id).subscribe(
      (response: any) => {
        console.log("archivos", response);
        const url = URL.createObjectURL(response);
        window.open(url, "iFrameADJNAFEC");
      },
      (error) => {
        Swal.fire(
          "Atención",
          "Se detecto un error al obtener el archivo",
          "warning"
        );
      }
    );
  }

  ver() {
    this.visto = true;
    this.visto2 = false;
    this.visto3 = false;
  }

  ver2() {
    this.visto2 = true;
    this.visto = false;
    this.visto3 = false;
  }

  ver3() {
    this.visto3 = true;
    this.visto2 = false;
    this.visto = false;
  }
  ver4() {
    this.visto4 = true;
    this.visto3 = false;
    this.visto2 = false;
    this.visto = false;
  }

  agregarInfo_Colaborador() {
    this.info_C = true;
    this.doc_C = false;
  }

  documentos_Colaborador() {
    this.info_C = false;
    this.doc_C = true;
  }

  addLista() {
    if (this.newLista.nombre == null) {
      Swal.fire("atencion", "llenar campo: nombre", "warning");
    } else if (this.newLista.numero == null) {
      Swal.fire("atencion", "llenar campo: numero", "warning");
    } else if (this.newLista.equipo == null) {
      Swal.fire("atencion", "llenar campo: equipo", "warning");
    } else {
      this.mostrarLista.push(this.newLista);
      this.newLista = new listas();
    }
    console.log("listas", this.mostrarLista);
  }

  elimarElementosListas(fila) {
    var ii = this.mostrarLista.indexOf(fila);
    this.mostrarLista.splice(ii, 1);
    console.log("eliminandolista", this.mostrarLista);
  }

  guardarListas() {
    this.conexcioServListas
      .newLista(this.mostrarLista)
      .subscribe((res: any) => {
        Swal.fire(
          "Atención",
          "Se detecto un error al obtener el archivo",
          "warning"
        );
        console.log("sd", res);
      });
  }

  seleccionarArchivoAV(event) {
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombre = file.name;
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoadedAV.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoadedAV(readerEvent) {
    var binaryString = readerEvent.target.result;
    this.archivo.base64 = btoa(binaryString);
    this.pushArchivos();
  }

  pushArchivos() {
    this.newColaborador1.doc_index.push(this.archivo);
    this.archivo = new Archivo();
    console.log("doc inndex archivos", this.newColaborador1.doc_index);
  }

  elimarArchivosListas(fila) {
    var ii = this.newColaborador1.doc_index.indexOf(fila);
    this.newColaborador1.doc_index.splice(ii, 1);
    console.log("eliminandolista", this.newColaborador1.doc_index);
  }

  setColaborador() {
    // this.newColaborador1.folio = '1';
    this.newColaborador1.departamento = "1";

    // this.newColaborador1.doc_index = this.archivo.nombreArchivo;
    // this.newColaborador1.image = this.archivo.base64textString;

    console.log("newC", this.newColaborador1);

    this.conexionServC
      .newColaborador(this.newColaborador1)
      .subscribe((res: any) => {
        console.log("respuesta", res);

        if (res.status == 200) {
          Swal.fire(
            "Alerta",
            "El usuario se registro correctamente",
            "success"
          );
          console.log("resp", res.response);
        } else {
          Swal.fire("Alerta", "Algo salio mal", "error");
        }
        // this.spinner.hide();
      });
  }

  getRoles() {
    this.conexionServRol.getRoles().subscribe((res: any) => {
      console.log("ddf", res);
      this.selectRoles = res.response;
      console.log("imp", this.selectRoles);
    });
  }

  cerrar_Sesion() {

    console.log("ressesion",this.sesionUsuario);

     this.conSerSesion.gs_CerrarSesion(this.sesionUsuario.id).subscribe((res:any)=>{
      console.log("ressesion",this.sesionUsuario);
      console.log("res",res);
      if(res.status == 200){
        this.router.navigate(["/user"]);
            }

     });
  }




  cambiar_Clave(){
    this.conSerSesion.ps_cambiarClave(this.sesionUsuario.id,this.pass).subscribe((res:any)=>{
      if(res.status ==200){
        console.log("res",res.status);
        console.log("pas",this.pass);
      }

    })

  }


  verClave(){
    if(this.tipoBtnVerClave == "password"){
      this.tipoBtnVerClave = "text";
    }else{
      this.tipoBtnVerClave = "password";
    }
  }



}
