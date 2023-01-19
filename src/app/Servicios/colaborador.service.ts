import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http : HttpClient) { }

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private api: string = `${environment.keyBack}`;

  newColaborador(colaborador:any):Observable<any>{

    console.log('user', colaborador);
    return this.http.post(this.api+'/newcolaborador',colaborador);
  }

  verColaboradores(idUser, dpto):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', idUser);
    params = params.append('departamento', dpto);
    return this.http.get(this.api+'/colaboradores', {params});
  }


  pdfColaborador(id_index: any,doc_index:any): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id_index);
    params = params.append('doc_index', doc_index);
    return this.http.get(this.api + '/show_index', {params,responseType: 'blob', headers: this.httpHeaders });
  }


}
