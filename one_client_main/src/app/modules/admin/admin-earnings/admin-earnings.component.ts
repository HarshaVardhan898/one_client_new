import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-earnings',
  templateUrl: './admin-earnings.component.html',
  styleUrls: ['./admin-earnings.component.css']
})
export class AdminEarningsComponent implements OnInit {

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
