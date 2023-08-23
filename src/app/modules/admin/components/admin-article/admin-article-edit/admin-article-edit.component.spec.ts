import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleEditComponent } from './admin-article-edit.component';

describe('AdminArticleEditComponent', () => {
  let component: AdminArticleEditComponent;
  let fixture: ComponentFixture<AdminArticleEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArticleEditComponent]
    });
    fixture = TestBed.createComponent(AdminArticleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
