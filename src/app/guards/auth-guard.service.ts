import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private _authService: LoginService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    return this._authService.validate().pipe(map(res => {
      if (res) {
          console.log('authenticated');
          return true;
      }
      console.log('not authenticated');
      this._router.navigateByUrl('/login');
      return false;
    }));
  }
}