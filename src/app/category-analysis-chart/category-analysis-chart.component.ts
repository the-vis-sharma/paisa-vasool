import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-category-analysis-chart',
  templateUrl: './category-analysis-chart.component.html',
  styleUrls: ['./category-analysis-chart.component.css'],
})
export class CategoryAnalysisChartComponent implements OnInit {
  doughnutChartLabels: Label[] = [
    'Food & Drink',
    'Shopping',
    'electronic',
    'Bills',
    'Entertainment',
    'Fuel',
    'Groceries',
    'Other',
  ];
  doughnutChartData: MultiDataSet = [[15, 15, 10, 15, 25, 5, 10, 5]];
  doughnutChartType: ChartType = 'doughnut';

  public chartColors: any[] = [
    {
      backgroundColor: ['#FF7360', '#6FC8CE', '#FAFFF2', '#FFFCC4', '#B9E8E0'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
