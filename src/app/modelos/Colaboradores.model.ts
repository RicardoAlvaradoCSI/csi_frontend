export class Colaboradores {
  id?: number;
  nombre?: string;
  correo?:string;
  departamento?: string;
  doc_index?:any[];
  id_rol?: number;
  folio?:string;
  toke?:string;
  password?:string;
  sesion?:number;


  constructor(){
    this.doc_index = [];
  }
}

