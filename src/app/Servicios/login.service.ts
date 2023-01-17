import { Observable } from 'rxjs';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  private api: string = `${environment.keyBack}`;

  gs_nuevaSesion(id,pass):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('password', pass);
    return this.http.get(this.api+'/LogIn',{params});
  }


  gs_CerrarSesion(idUsuario):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', idUsuario);
    return this.http.get(this.api+'/LogOut',{params});
  }


  ps_cambiarClave(idUsuario,mail):Observable<any>{
    let params = new HttpParams();
    params = params.append('id', idUsuario);
    params = params.append('correo', mail);
    return this.http.post(this.api+'/ChangePass',{params});
  }


   ps_enviarCorreo(correo):Observable<any>{
    let params = new HttpParams();
    params = params.append('correo', correo)
    return this.http.post(this.api+'/RestaurarPass',params);
  }




}
