export class Colaboradores {
  id?: number;
  nombre?: string;
  departamento?: string;
  doc_index?:any[];
  id_rol?: number;
  folio?:string;
  image?:string;

  constructor(){
    this.doc_index = [];
  }
}

