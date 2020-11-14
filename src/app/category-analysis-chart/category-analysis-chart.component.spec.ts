import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAnalysisChartComponent } from './category-analysis-chart.component';

describe('CategoryAnalysisChartComponent', () => {
  let component: CategoryAnalysisChartComponent;
  let fixture: ComponentFixture<CategoryAnalysisChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAnalysisChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAnalysisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
