import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-earnings',
  templateUrl: './employee-earnings.component.html',
  styleUrls: ['./employee-earnings.component.css']
})
export class EmployeeEarningsComponent implements OnInit {

  constructor() { }

  earningDetailsHeaders = ['Ticket Details', 'Points', 'Completed date']
  earningDetailsList = [{
    ticketDescription: '',
    ticketHeading: 'Ticket Heading',
    ticketSubHeading: 'Ticket Subheading',
    points: 45,
    completedDate: new Date()
  },
  {
    ticketDescription: '',
    ticketHeading: 'Ticket Heading',
    ticketSubHeading: 'Ticket Subheading',
    points: 45,
    completedDate: new Date()
  }, {
    ticketDescription: '',
    ticketHeading: 'Ticket Heading',
    ticketSubHeading: 'Ticket Subheading',
    points: 45,
    completedDate: new Date()
  },
  {
    ticketDescription: '',
    ticketHeading: 'Ticket Heading',
    ticketSubHeading: 'Ticket Subheading',
    points: 45,
    completedDate: new Date()
  }
  ]

  ngOnInit(): void {
  }

}
