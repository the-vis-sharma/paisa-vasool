import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-spend-analysis-chart',
  templateUrl: './spend-analysis-chart.component.html',
  styleUrls: ['./spend-analysis-chart.component.css'],
})
export class SpendAnalysisChartComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [
    'Food & Drink',
    'Shopping',
    'electronic',
    'Bills',
    'Entertainment',
    'Fuel',
    'Groceries',
    'Other',
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 40, 60, 46, 33, 45, 49], label: 'Best Fruits' },
  ];

  constructor() {}

  ngOnInit() {}
}
