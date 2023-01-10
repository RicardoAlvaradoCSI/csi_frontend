import { NgxSpinnerService } from "ngx-spinner";
import { UsuariosModel } from "./../../modelos/tblActividad1.model";
import { Component, OnInit } from "@angular/core";
import { UsuariosSerService } from "src/app/Servicios/usuarios-ser.service";
import Swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-actividad2",
  templateUrl: "./actividad2.component.html",
  styleUrls: ["./actividad2.component.css"],
})
export class Actividad2Component implements OnInit {
  newUser = new UsuariosModel();
  idSistema = 0;
  newForm1: FormGroup;

  constructor(
    private conexionServ: UsuariosSerService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.newForm1 = this.fb.group({
      numero: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      default: ["", [Validators.required]],
    });
  }

  validaDatos(formInput: string) {
    return (
      this.newForm1.get(formInput).invalid &&
      this.newForm1.get(formInput).touched
    );
  }

  validarFormulario() {}

  validaCreacion() {
    console.log("!this.validar", this.validar);

    if (!this.validar()) {
      // Swal.fire("Atencion", "Ingrese todos los datos", "warning");
    } else {
      Swal.fire({
        title: "Estas seguro de registrar a " + this.newUser.Nombre + "?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          this.creaUser();
        }
      });
    }
  }

  validar(): boolean {
    if (!this.newUser.Numero) {
      Swal.fire("Atencion", "Ingrese numero", "warning");
      return false;
    } else if (!this.newUser.Nombre) {
      Swal.fire("Atencion", "Ingrese Nombre", "warning");
      return false;
    } else if (!this.newUser.Descripcion) {
      Swal.fire("Atencion", "Ingrese Descripcion", "warning");
      return false;
    } else if (!this.newUser.Default) {
      Swal.fire("Atencion", "Ingrese Default", "warning");
      return false;
    } else {
      return true;
    }
  }

  creaUser() {
    console.log("entre al met");
    console.log("Este es el numero", this.newUser);
    this.spinner.show();
    this.conexionServ.newUser(this.newUser).subscribe((res: any) => {
      if (res.status == 200) {
        Swal.fire("Alerta", "El usuario se registro correctamente", "success");
        console.log("resp", res.response);
      } else {
      }
      this.spinner.hide();
    });
    //  this.regresar.navigate(['/user'])
  }

  setUsuarios(usuarioinfo: any, idSistema) {
    console.log("ESTE ES EL ID DEL SISTEMA", idSistema);
    this.idSistema = idSistema;

    if (idSistema == 1) {
      this.newUser = usuarioinfo;
    }
  }
}
