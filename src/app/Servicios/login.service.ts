import { Observable } from 'rxjs';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Colaboradores } from '../modelos/Colaboradores.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _token: string;
  _user: Colaboradores;

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

  isAuthenticated(): boolean {
    let payload: any;
    if (sessionStorage.getItem('token')) {
      payload = sessionStorage.getItem('token');
      return payload ? true : false;
    } else {
      return false;
    }
  }

  saveUser(accessToken: any) {
    const payload = accessToken;
    this._user = new Colaboradores();
    this._user.id = payload.id;
    this._user.correo = payload.correo;
    this._user.nombre = payload.nombre;

    sessionStorage.setItem('user', JSON.stringify(this._user));
  }


  saveToken(accessToken: any) {
    const payload = accessToken;
    this._token = payload.token;
    sessionStorage.setItem('token', this._token);
  }

  logout(): void {
    this._token = null;
    this._user = null;
    sessionStorage.clear();
  }





}
