import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEarningsComponent } from './employee-earnings.component';

describe('EmployeeEarningsComponent', () => {
  let component: EmployeeEarningsComponent;
  let fixture: ComponentFixture<EmployeeEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEarningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
