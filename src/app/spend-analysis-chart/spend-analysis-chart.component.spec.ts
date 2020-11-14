import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendAnalysisChartComponent } from './spend-analysis-chart.component';

describe('SpendAnalysisChartComponent', () => {
  let component: SpendAnalysisChartComponent;
  let fixture: ComponentFixture<SpendAnalysisChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendAnalysisChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendAnalysisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
