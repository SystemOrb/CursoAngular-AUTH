import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router,
        CanActivate,
        RouterStateSnapshot,
        ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean
  {
    if(this.auth.isAuthenticated())
    {
      return true;
    }else{
      return false;
    }
  }
}
