
import { LoginService } from "./../../Servicios/login.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Colaboradores } from "src/app/modelos/Colaboradores.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private conSerSesion: LoginService) {}

  user = "";
  pass = "";
  correo = "";
  token = "";
  tokenValida = "";

  obtCodigo = true;
  envCodigo = true;
  opciones  = true;

  usuarioLogin : Colaboradores;




  verCampos = true;
  verOpciones = true;


  obtenerCodigo = false;
  validaCodigo = false;
  nuevaClave = false;

  ngOnInit() {}

  sesion() {
    this.conSerSesion
      .gs_nuevaSesion(this.user, this.pass)
      .subscribe((res: any) => {
        if (res.status == 200 ) {

          this.usuarioLogin = res.response;

          console.log("usuarioslogihn",this.usuarioLogin);

          this.conSerSesion.saveUser(this.usuarioLogin);
          this.conSerSesion.saveToken(this.usuarioLogin);



          Swal.fire(
            "Bienvenido",
            "El usuario se registro correctamente",
            "success"
          );
          this.router.navigate(["/user/colaboradores/"]);
          console.log("resp", res.response);
        } else {
          console.log("resp", res.response);
          Swal.fire("Error", "Algo salio mal", "error");
        }
      });


  }


  obtener_Codigo(){
    this.obtenerCodigo = true;
    this.validaCodigo = false;
  }

  enviar_Codigo(){
    this.validaCodigo = true;
    this.obtenerCodigo = false;
  }

  nueva_Clave(){
    this.nuevaClave = true;
    this.validaCodigo = false;
    this.obtenerCodigo = false;
  }





  enviar_correo(){
    this.token = "";
    this.conSerSesion.ps_enviarCorreo(this.correo).subscribe((res: any) => {

        if (res.status == 200 ) {
          this.token=res.response;

          this.verOpciones  = false;
          this.obtenerCodigo = false;
          this.validaCodigo = true;


          Swal.fire("Atenci??n!", "Enviando c??digo", "success");
        } else {
          Swal.fire("Error", "Algo salio mal", "error");
        }
      });

    // console.log("correoenviar",this.correo);




  }


  validar_Codigo(){
    if(this.token == this.tokenValida){

      this.validaCodigo = false;
      this.nuevaClave = true;
    }
  }


}
