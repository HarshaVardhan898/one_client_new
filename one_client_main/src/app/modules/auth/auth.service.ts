import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { jwtDecode } from 'jwt-decode';
import { ApiUrls } from 'src/app/services/api-urls.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  isTokenExpired(tokenPayload?: string): boolean {
    // if (!token) token = this.localStorageService.getItem('token');
    // if (!token) return true
    // console.log(20, token)
    // const date = this.getTokenExpirationDate(token)
    // console.log(23, date)
    // if (date === undefined) return false
    // return !(date.valueOf() === new Date().valueOf())
    let token = this.localStorageService.getItem('token')
    if (token) {
      this.localStorageService.setItem("userDetails", JSON.stringify(jwtDecode(token)))
    }
    return false
  }

  getTokenExpirationDate(token: string): any {
    const decoded: any = jwtDecode(token)
    if (decoded.exp === undefined) return null;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  redirectUserAfterLogin(token?: string) {
    // const token = this.localStorageService.getItem('token');
    // write condition to check token is expired
    if (!token) token = this.localStorageService.getItem('token');
    if (token) {
      this.localStorageService.setItem('token', token);
      let decoded: any;
      decoded = jwtDecode(token);
      if (token) {
        this.localStorageService.setItem("userDetails", JSON.stringify(jwtDecode(token)))
      }
      switch (decoded.role) {
        case 'System Admin':
          this.router.navigate(['/super-level/statistics']);
          break;

        case 'User':
          this.router.navigate(['employee/work']);
          break;

        case 'Admin':
          this.router.navigate(['admin-level/dashboard']);
          break;
      }
    }
  }

  signIn(body: any, params: any) {
    return this.http.post(ApiUrls.signIn, { params: params }).pipe(map(
      (res: any) => {
        return res
      }
    ))
  }

  sendOtp(body: any, params: any) {
    return this.http.post(ApiUrls.sendOtp, body, { params: params }).pipe(map(
      (res: any) => {
        return res
      }
    ))
  }

  validateOtp(body: any, params: any) {
    return this.http.post(ApiUrls.validateOtp, body, { params: params }).pipe(map(
      (res: any) => {
        return res
      }
    ))
  }


  getUsers(body: any, params: any) {
    return this.http.get(ApiUrls.getAdminsList, { params: params }).pipe(map(
      (res: any) => {
        return res
      }
    ))
  }


  createUser(body: any, params: any) {
    return this.http.post(ApiUrls.createUser, body, { params: params }).pipe(map(
      (res: any) => {
        return res
      }
    ))
  }



  adminUserActiveDashboard(body: any, params: any) {
    return this.http.post(ApiUrls.adminActiveDashboard, body, {}).pipe(map(
      (res: any) => {
        return res
      }
    ))
  }

  ticketsCompletedForEachDate(body: any, params: any) {
    return this.http.post(ApiUrls.adminDateWiseCount, body, {}).pipe(map(
      (res: any) => {
        return res
      }
    ))
  }

  sendOtpForCustomer(body: any, params: any) {
    return this.http.post(ApiUrls.adminDateWiseCount, body, {}).pipe(map(
      (res: any) => {
        return res
      }
    ))
  }

  verifyOtpForCustomer(body: any, params: any) {
    return this.http.post(ApiUrls.adminDateWiseCount, body, {}).pipe(map(
      (res: any) => {
        return res
      }
    ))
  }


}
