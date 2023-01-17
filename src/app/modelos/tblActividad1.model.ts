export class UsuariosModel {
  id?: number;
  Numero?: number;
  Nombre?: string;
  Descripcion?: string;
  Default?: number;
}

export class Colaboradores {
  id?: number;
  nombre?: string;
  departamento?: string;
  doc_index?:any[];
  id_rol?: number;
  folio?:string;
  image?:string;
  correo:string;


  constructor(){
    this.doc_index = [];
  }
}

export class roles {
  id?: number;
  idEncargado?: number;
  rol?: number;
  nombre?: string;
}


export class listas {
  id?: number;
  nombre?: string;
  numero?: number;
  equipo?: string;

  constructor(){
    this.id = 0;
  }
}
