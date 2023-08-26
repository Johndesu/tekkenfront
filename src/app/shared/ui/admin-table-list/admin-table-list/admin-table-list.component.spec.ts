import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableListComponent } from './admin-table-list.component';

describe('AdminTableListComponent', () => {
  let component: AdminTableListComponent;
  let fixture: ComponentFixture<AdminTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTableListComponent]
    });
    fixture = TestBed.createComponent(AdminTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
