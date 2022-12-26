import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { InterceptorService } from '../_interceptor/interceptor.service';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  appService;
  constructor(private router: Router, private interceptorSerivice: InterceptorService) {
    this.appService = AppService
  }
  helper = new JwtHelperService();

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token: any = sessionStorage.getItem('TOKEN');
    const isExpired = this.helper.isTokenExpired(token);
    console.log("tttttt0000000000000000ttttt",isExpired)

    if (token) {
    console.log("ttttttttttttttttttttttt", isExpired)
      if (!isExpired) {
        console.log("*****************", isExpired)
        return true
      } else {
        this.router.navigateByUrl('/signIn');
        return false;
      }
    } else {
      this.router.navigateByUrl('/signIn');
      return false;
    }
  }
  // canActivate(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }

}
