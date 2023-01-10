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
  doc_index?:string;
  id_rol?: number;
  folio?:string;
  image?:string;
}

export class roles {
  id?: number;
  idEncargado?: number;
  rol?: number;
  nombre?: string;
}
