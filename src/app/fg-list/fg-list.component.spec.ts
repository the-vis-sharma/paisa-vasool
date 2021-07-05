import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgListComponent } from './fg-list.component';

describe('FgListComponent', () => {
  let component: FgListComponent;
  let fixture: ComponentFixture<FgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
