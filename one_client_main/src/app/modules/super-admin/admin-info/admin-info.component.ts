import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {
  adminForm: any;
  adminFormSubmitted: boolean = false;
  changeStatusIndexMenu = -1;
  adminDetailsHeaders = [
    'PROFILE', 'REGION', 'EMPLOYEE COUNT', 'STATUS'
  ]
  adminDetailsList: any;
  firstName: any;
  lastName: any;
  email: any;
  phone: any;
  createPassword: any;
  confirmPassword: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getAdminList()
  }

  buildForm() {
    let group: any = {};
    // group['phoneNumber'] = new FormControl('', [Validators.required, this.validateMobilePhoneNumber(10)])

    // group['password'] = new FormControl('', [Validators.required]);
    this.adminForm = this.formBuilder.group({
      email: ['', [Validators.required, this.validateEmail()]]
    })
  }

  checkColorCode(index: number, status: string) {
    console.log(index)
    let id = `color-dot` + index;
    let element = document.getElementById('id')
    console.log(element, 'element')
  }

  openModal() {
    this.buildForm()
    document.querySelector('#overlay')?.classList.remove('hidden')
  }

  ///^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  validateMobilePhoneNumber(length: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null
      } else {
        console.log(control.value, 'contrloll valueeee')
        console.log(length, 'length  ')
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
        console.log(control.value, 'contrloll valueeee')
        let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        const regex = emailPattern;
        const valid = regex.test(control.value)
        return valid ? null : { invalidEmail: true }
      }
    }
  }

  closeAdminCreateModal() {
    document.querySelector('#overlay')?.classList.add('hidden')
  }

  changeStatusMenu(index: number) {
    console.log(index, 'index')
    if (this.changeStatusIndexMenu === -1) {
      this.changeStatusIndexMenu = index
    } else {
      this.changeStatusIndexMenu = -1
    }
    console.log(this.changeStatusIndexMenu)
  }

  changeStatus(admin: any) {
    console.log(admin, 'admin')
  }

  getAdminList() {
    let body = '';
    let params = ''
    this.authService.getUsers(body, params).subscribe((res: any) => {
      try {
        console.log(res, 'resss')
        this.adminDetailsList = res?.userDetails
      } catch (error) {
        console.log(error, 'errrrrr')
      }
    })
  }

  createUser() {
    console.log(this.firstName, this.lastName, this.email, this.createPassword, this.confirmPassword)
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: `+91${this.phone}`,
      status: "active",
      role: "Admin",
      sAdminId: JSON.parse(this.localStorageService.getItem('userDetails')).userId,
      password: this.confirmPassword
    }

    if (this.phone.length === 10 && this.confirmPassword) {
      this.createUserAtDb(data)
    }


  }

  giveInput(text: any, event: any) {
    switch (text) {
      case 'firstName':
        this.firstName = event.target.value
        break;
      case 'lastName':
        this.lastName = event.target.value
        break;
      case 'email':
        this.email = event.target.value
        break;
      case 'phone':
        this.phone = event.target.value
        break;
      case 'createPassword':
        this.createPassword = event.target.value
        break;
      case 'confirmPassword':
        this.confirmPassword = event.target.value
        break;
    }
  }

  createUserAtDb(body: any) {
    console.log('createUserAtDb')
    let params = ''
    this.authService.createUser(body, params).subscribe((res: any) => {
      try {
        console.log(res, 'ressss')
        if (res.status) {
          document.querySelector('#overlay')?.classList.add('hidden')
          this.getAdminList()
        }
      } catch (error) {
        console.log(error, 'errrrrr')
      }
    })
  }
}
