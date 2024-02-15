import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiUrlsService {

  constructor() { }
}

export const domain = environment.apiDomain;
export const ApiUrls = {
  signIn: `${domain}/auth/signin`,
  sendOtp: `${domain}otp/getSignInotp`,
  validateOtp: `${domain}users/login`,
  getAdminsList: `${domain}users`,
  createUser: `${domain}users`,
  sendOtpForCustomer: `${domain}/otp/get-otp/customer`,
  verifyOtpCustomer: `${domain}/otp/verify-otp/customer`,
  adminActiveDashboard: `${domain}users/getcompletedTicketCountSA`,
  adminDateWiseCount: `${domain}users/getcompletedTicketCountDatewiswSA`
}
