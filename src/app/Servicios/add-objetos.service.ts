import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddObjetosService {

  constructor(private http : HttpClient) { }

  private api: string = `${environment.keyBack}`;


  newLista(mostrarLista:any):Observable<any>{
    return this.http.post(this.api+'/newlista',{mostrarLista});
  }





}





