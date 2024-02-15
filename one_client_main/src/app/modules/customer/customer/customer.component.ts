import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  showCreateTicketModal: boolean = false;
  showCreateTicketButton: boolean = false;
  showPhoneNumber: boolean = false;
  showViewMyTicketsModal: boolean = false;
  showTicketsListFinal: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) { }
  adminForm: any;
  otpVerified: boolean = false;
  showForm: boolean = false
  phoneNumber = '';
  otpValue = '';
  showOtp = false;
  showOtpButton: boolean = false
  showVerifyOtpButton: boolean = false
  firstNameValue: string = '';
  lastNameValue: string = '';
  ticketNameValue: string = '';
  ticketDescriptionValue: string = '';
  showMyTickets: boolean = false
  showMyTicketsModal: boolean = false;
  ticketList = [
    {
      name: 'Abc',
      description: 'Adasfasfdsfdsfdsafsdf',
      status: 'active',
    },
    {
      name: 'Abc',
      description: 'Adasfasfdsfdsfdsafsdf',
      status: 'active',
    },
    {
      name: 'Abc',
      description: 'Adasfasfdsfdsfdsafsdf',
      status: 'active',
    },
    {
      name: 'Abc',
      description: 'Adasfasfdsfdsfdsafsdf',
      status: 'active',
    },
    {
      name: 'Abc',
      description: 'Adasfasfdsfdsfdsafsdf',
      status: 'active',
    },
    {
      name: 'Abc',
      description: 'Adasfasfdsfdsfdsafsdf',
      status: 'active',
    },
    {
      name: 'Abc',
      description: 'Adasfasfdsfdsfdsafsdf',
      status: 'active',
    }
  ]


  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    let group: any = {};
    // group['phoneNumber'] = new FormControl('', [Validators.required, this.validateMobilePhoneNumber(10)])

    // group['password'] = new FormControl('', [Validators.required]);
    this.adminForm = this.formBuilder.group({
      firstName: ['', []],
      lastName: ['', []],
      ticketName: ['', []],
      ticektDescription: ['', []]
    })
  }

  changePhonenNuberValue(event: any) {
    this.phoneNumber = event.target.value
    if (this.phoneNumber.length === 10) {
      this.showOtpButton = true
    } else {
      this.showOtpButton = false
    }
  }

  sendOtp() {
    this.showOtp = true;
    this.showPhoneNumber = false

  }

  enterOtp(event: any) {
    this.otpValue = event.target.value
    if (this.otpValue.length === 4) {
      this.showVerifyOtpButton = true;
    } else {
      this.showVerifyOtpButton = false;
    }
  }

  verifyOtp() {
    this.showCreateTicketModal = false;
  }

  ticketDescriptionValueChange(event: any) {
    this.ticketDescriptionValue = event.target.value;
  }

  firstNameValueChange(event: any) {
    this.firstNameValue = event.target.value;
  }

  lastNameValueChange(event: any) {
    this.lastNameValue = event.target.value;
  }
  tickeNameValueChange(event: any) {
    this.ticketNameValue = event.target.value;
  }

  createTicket() {

  }

  openMyTickets() {
    this.showViewMyTicketsModal = true;
    this.showPhoneNumber = true;
  }

  closeModal() {
    this.showCreateTicketModal = false;
    this.showMyTicketsModal = false;
    this.showViewMyTicketsModal = false;
    window.location.reload();
  }

  fetchMyTickets() {
    this.showTicketsListFinal = true;
  }

  sendOtpBackend(body: any) {
    let params = ''
    this.authService.createUser(body, params).subscribe((res: any) => {
      try {
        if (res.status) {

        }
      } catch (error) {
        console.log(error, 'errrrrr')
      }
    })
  }

}
