import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesServiceService {

  constructor(private http : HttpClient) { }
  private api: string = `${environment.keyBack}`;

  getRoles():Observable<any>{
    return this.http.get(this.api+'/roles');
  }

}
