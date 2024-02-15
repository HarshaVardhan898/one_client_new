import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(private router: Router,
    private authService: AuthService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    let tokenPayLoad: any;
    if (token) {
      tokenPayLoad = jwtDecode(token)
    } else {
      this.router.navigate(['/auth/sign-in'], { queryParams: { returnUrl: state.url } })
      return false;
    }
    if (this.authService.isTokenExpired()) {
      this.router.navigate(['/auth/sign-in'], { queryParams: { returnUrl: state.url } })
      return false
    }
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    let tokenPayLoad: any;
    if (token) {
      tokenPayLoad = jwtDecode(token)
    } else {
      this.router.navigate(['/auth/sign-in'], { queryParams: { returnUrl: state.url } })
      return false;
    }
    if (this.authService.isTokenExpired()) {
      this.router.navigate(['/auth/sign-in'], { queryParams: { returnUrl: state.url } })
      return false
    }
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
