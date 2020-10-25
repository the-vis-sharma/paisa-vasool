import { Component, OnInit } from '@angular/core';

export interface Notification {
  message: string;
  dateTime: Date;
}

@Component({
  selector: 'app-notification-sheet',
  templateUrl: './notification-sheet.component.html',
  styleUrls: ['./notification-sheet.component.css']
})
export class NotificationSheetComponent implements OnInit {

   messages: Notification[] = [
    {
      message: 'This message displays the notification type, the alert number, and details of the event',
      dateTime: new Date()
    },
    {
      message: 'Manali Trip',
      dateTime: new Date()
    },
    {
      message: 'Manali Trip',
      dateTime: new Date('2019-03-16')
    },
    {
      message: 'Manali Trip',
      dateTime: new Date('2020-03-16')
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
