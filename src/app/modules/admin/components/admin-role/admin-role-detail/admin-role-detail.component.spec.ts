import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoleDetailComponent } from './admin-role-detail.component';

describe('AdminRoleDetailComponent', () => {
  let component: AdminRoleDetailComponent;
  let fixture: ComponentFixture<AdminRoleDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRoleDetailComponent]
    });
    fixture = TestBed.createComponent(AdminRoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
