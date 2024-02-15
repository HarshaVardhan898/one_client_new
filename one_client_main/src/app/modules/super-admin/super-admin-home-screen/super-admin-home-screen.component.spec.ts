import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminHomeScreenComponent } from './super-admin-home-screen.component';

describe('SuperAdminHomeScreenComponent', () => {
  let component: SuperAdminHomeScreenComponent;
  let fixture: ComponentFixture<SuperAdminHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminHomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
