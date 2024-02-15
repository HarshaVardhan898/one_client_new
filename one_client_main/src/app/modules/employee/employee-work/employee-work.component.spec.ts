import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWorkComponent } from './employee-work.component';

describe('EmployeeWorkComponent', () => {
  let component: EmployeeWorkComponent;
  let fixture: ComponentFixture<EmployeeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
