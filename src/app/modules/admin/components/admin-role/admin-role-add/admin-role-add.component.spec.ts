import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoleAddComponent } from './admin-role-add.component';

describe('AdminRoleAddComponent', () => {
  let component: AdminRoleAddComponent;
  let fixture: ComponentFixture<AdminRoleAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRoleAddComponent]
    });
    fixture = TestBed.createComponent(AdminRoleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
