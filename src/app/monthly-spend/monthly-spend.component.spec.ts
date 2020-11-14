import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySpendComponent } from './monthly-spend.component';

describe('MonthlySpendComponent', () => {
  let component: MonthlySpendComponent;
  let fixture: ComponentFixture<MonthlySpendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlySpendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
