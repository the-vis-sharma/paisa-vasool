import { Component, OnInit, Input } from '@angular/core';

export interface Spends {
  category: string;
  descrption: string;
  dateTime: Date;
  totalSpend: number;
  yourSpend: number;
}

@Component({
  selector: 'app-daily-spend',
  templateUrl: './daily-spend.component.html',
  styleUrls: ['./daily-spend.component.css'],
})
export class DailySpendComponent implements OnInit {
  @Input() monthSpends = [];

  constructor() {}

  ngOnInit() {}
}
