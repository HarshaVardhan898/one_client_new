import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  adminForm: any;
  adminFormSubmitted: boolean = false;
  changeStatusIndexMenu = -1;
  adminDetailsHeaders = [
    'PROFILE', 'REGION', 'EMPLOYEE COUNT', 'STATUS'
  ]
  adminDetailsList = [
    {
      firstName: 'Naveen',
      lastName: 'Nayak',
      profileImageUrl: '',
      region: 'Telangana',
      employeeCount: 5,
      status: 'active'
    },
    {
      firstName: 'Naveen',
      lastName: 'Nayak',
      region: 'Telangana',
      employeeCount: 5,
      status: 'inactive'
    }

  ];
  firstName: any;
  lastName: any;
  email: any;
  phone: any;
  createPassword: any;
  confirmPassword: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
    let id = `color-dot` + index;
    let element = document.getElementById('id')
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

  closeAdminCreateModal() {
    document.querySelector('#overlay')?.classList.add('hidden')
  }

  changeStatusMenu(index: number) {
    if (this.changeStatusIndexMenu === -1) {
      this.changeStatusIndexMenu = index
    } else {
      this.changeStatusIndexMenu = -1
    }
  }

  changeStatus(admin: any) {

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

}
