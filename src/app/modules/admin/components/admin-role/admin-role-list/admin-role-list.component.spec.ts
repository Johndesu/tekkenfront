import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoleListComponent } from './admin-role-list.component';

describe('AdminRoleListComponent', () => {
  let component: AdminRoleListComponent;
  let fixture: ComponentFixture<AdminRoleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRoleListComponent]
    });
    fixture = TestBed.createComponent(AdminRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
