import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-work',
  templateUrl: './employee-work.component.html',
  styleUrls: ['./employee-work.component.css']
})
export class EmployeeWorkComponent implements OnInit {

  constructor() { }
  yetToStartIndex = -1;
  completedTicketIndex = -1;
  inprogressTicketIndex = -1;
  cardsList = [];
  yetToStartTickets = [
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
  ]
  workInProgressTickets = [
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
  ]
  completedTickets = [
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
  ]
  verifiedTickets = [
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
    {
      heading: 'Ticket Heading',
      subHeading: 'Sub heading',
      completedDate: new Date(),
      description: 'Description of the ticket is the ticket description is the biggest empathy commpany of the lstes ojfksad go im th set'
    },
  ]
  ngOnInit(): void {

  }

}
