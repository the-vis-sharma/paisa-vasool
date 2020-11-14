import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuListItemComponent } from './side-menu-list-item.component';

describe('SideMenuListItemComponent', () => {
  let component: SideMenuListItemComponent;
  let fixture: ComponentFixture<SideMenuListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
