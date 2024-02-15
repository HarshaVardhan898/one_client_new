import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private acivatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }
  loginForm: any;

  loginAs = 'ADMIN';
  loginMode = 'OTP';
  retunUrl = '';
  environment: any;
  otpValue = '';
  showOTPButton: boolean = false;


  /** BOOLEANS */
  showPassword = false;
  showOTP = false;
  loginFormSubmitted = false;
  otpSent = false;
  otpSpinner = false;
  otpMode = true;
  userNotFound: boolean = false;
  otpInvalid: boolean = false;



  ngOnInit(): void {
    let params = this.route.snapshot.queryParams;
    if (params['retunUrl']) {
      this.retunUrl = params['retunUrl'];
    }
    this.environment = environment;
    this.buildForm();
    this.acivatedRoute.queryParams.subscribe((res: any) => {
      // this.authService.redirectUserAfterLogin()
    })

    // this.signIn()
  }

  /**
   * Toggles the logging as to user or admin
   */
  toggleLoginAs(mode: string) {
    this.loginAs = mode;
  }

  /**
   * Toggles login mode to show email or mobile number
   * @param mode mode === 'OTP' or 'Email'
   */
  toggleLoginMode(mode: string) {
    this.showPassword = false;
    this.showOTP = false;
    this.loginFormSubmitted = false;

    this.loginFormSubmitted = false;
    this.loginMode = mode;
    this.buildForm();
    this.otpSent = false;

  }

  /**
   * toggle eye icon to show or hide password
   * @param mode true or false
   */
  toggleShowPassword(type: string, mode: boolean) {
    switch (type) {
      case 'EMAIL':
        this.showPassword = !mode;
        this.otpMode = false;
        if (mode) {
          document.getElementById('PASSWORD-INPUT')?.setAttribute("type", 'password')
        } else {
          document.getElementById('PASSWORD-INPUT')?.setAttribute("type", 'text')
        }
        break;

      case 'OTP':
        this.showOTP = !mode;
        this.otpMode = true;
        if (mode) {
          document.getElementById('OTP-INPUT')?.setAttribute("type", 'password')
        } else {
          document.getElementById('OTP-INPUT')?.setAttribute("type", 'text')
        }
        break;
    }
  }

  changePhoneNumber(event: any) {
    this.otpSent = false;
    if (event?.target?.value) {
      let length = event?.target?.value?.length;
      if (!event?.target.value[length - 1].match(/^[0-9]+$/)) {
        event.target.value = event?.target?.value?.slice(0, -1)
      }
    }
  }

  buildForm() {
    let group: any = {};
    switch (this.loginMode) {

      case 'OTP':
        group['phoneNumber'] = new FormControl('', [Validators.required, this.validateMobilePhoneNumber(10)])
        // group['otp'] = new FormControl('', [Validators.required, this.validateMobilePhoneNumber(6)]);
        break;
      case 'EMAIL':
        // let group: any = {};
        group['email'] = new FormControl('', [Validators.required, this.validateEmail()])
        group['password'] = new FormControl('', [Validators.required]);
    }

    this.loginForm = new FormGroup(group);

  }


  ///^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  validateMobilePhoneNumber(length: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null
      } else {
        const valid = control.value.length === length ? true : false;
        return valid ? null : { invalid: true }
      }
    }
  }

  validateEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null
      } else {
        let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        const regex = emailPattern;
        const valid = regex.test(control.value)
        return valid ? null : { invalidEmail: true }
      }
    }
  }


  sendOtp() {
    this.loginFormSubmitted = true;
    let params = ''
    if (this.loginForm?.status === 'VALID') {
      this.otpSpinner = true;
      let body = {
        phone: `+91${this.loginForm.value.phoneNumber}`
      }
      this.authService.sendOtp(body, params).subscribe((res: any) => {
        try {
          if (res.success) {
            this.userNotFound = false;
            this.otpSpinner = false;
            this.otpSent = true;
            this.userNotFound = false;
            this.otpInvalid = false;
          }
          else {
            this.userNotFound = true;
            this.otpSpinner = false;
            this.otpSent = false;
          }

        } catch (error) {
          this.userNotFound = true;
          this.otpSpinner = false;
          this.otpSent = false;
        }
      })

    }

  }

  verifyOtp() {

    this.loginFormSubmitted = true;
    let params = '';
    this.otpSpinner = true;
    let body = {
      otp: this.otpValue,
      phone: `+91${this.loginForm.value.phoneNumber}`
    }
    this.authService.validateOtp(body, params).subscribe((res: any) => {
      try {
        if (res.status) {
          this.authService.redirectUserAfterLogin(res.token)
          // if (res.otpSent) {
          //   this.userNotFound = false;
          //   this.otpSpinner = false;
          //   this.otpSent = true;
          // } else {
          //   this.userNotFound = true;
          //   this.otpSpinner = false;
          //   this.otpSent = false;
          // }
        }

      } catch (error) {
        console.log(error, 'errrrrr')
      }
    })
  }

  signIn() {
    let body = '';
    let params = ''
    this.authService.signIn(body, params).subscribe((res: any) => {
      try {

      } catch (error) {
        console.log(error, 'errrrrr')
      }
    })
  }

  otpValueInput(event: any) {
    if (event.target.value && event.target.value?.length == 4) {
      this.otpValue = event.target.value;
      this.showOTPButton = true;
      this.otpInvalid = false;
      let params = '';
      let body = {
        otp: event.target.value,
        phone: `+91${this.loginForm.value.phoneNumber}`
      }
      this.authService.validateOtp(body, params).subscribe((res: any) => {
        try {
          this.authService.redirectUserAfterLogin(res.token)

        } catch (error) {
          console.log(error, 'errrrrr')
        }
      })

    } else if (event.target.value && event.target.value.length > 0 && event.target.value.length !== 4) {
      this.otpInvalid = true;
      this.showOTPButton = false;
    }
  }


}
