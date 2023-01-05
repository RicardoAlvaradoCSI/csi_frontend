import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosSerService {

  constructor(private http : HttpClient) { }


  private api: string = `${environment.keyBack}`;

  newUser(user:any):Observable<any>{

    console.log('user', user);

    return this.http.post(this.api+'/newUser',user);
  }

  //private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

}
