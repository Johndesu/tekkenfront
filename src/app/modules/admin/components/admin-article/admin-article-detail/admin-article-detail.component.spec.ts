import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleDetailComponent } from './admin-article-detail.component';

describe('AdminArticleDetailComponent', () => {
  let component: AdminArticleDetailComponent;
  let fixture: ComponentFixture<AdminArticleDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArticleDetailComponent]
    });
    fixture = TestBed.createComponent(AdminArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
