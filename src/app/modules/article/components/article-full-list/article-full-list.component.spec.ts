import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFullListComponent } from './article-full-list.component';

describe('ArticleFullListComponent', () => {
  let component: ArticleFullListComponent;
  let fixture: ComponentFixture<ArticleFullListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleFullListComponent]
    });
    fixture = TestBed.createComponent(ArticleFullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
