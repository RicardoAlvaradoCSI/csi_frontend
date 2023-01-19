import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService : LoginService, private router : Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      // this.router.navigate(['/login/dms']);
      this.router.navigate(['/login']);
      return false;
    }
  }





}
