import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: LoginService, public router: Router) {}
  canActivate(): boolean {
    this.auth.isAuthenticated().subscribe(data => {
      if(!data){
        this.router.navigate(['login']);
        return false;
      }
      return true;
    })
    return true;
  }
}
