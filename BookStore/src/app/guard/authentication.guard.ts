import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguradService } from '../authgurad.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguradService, private router: Router) { }

  canActivate(): boolean {
    if (this.Authguardservice.gettoken()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}