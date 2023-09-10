import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddArticleRequest } from '../../../models/article/article-add-request.model';
import { ArticleService } from '../../../services/admin-article/article.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/admin-category/category.service';
import { Category } from '../../../models/category/category.model';


@Component({
  selector: 'app-admin-article-add',
  templateUrl: './admin-article-add.component.html',
  styleUrls: ['./admin-article-add.component.css']
})
export class AdminArticleAddComponent implements OnInit, OnDestroy{

  model: AddArticleRequest;
  categories$?: Observable<Category[]>

  private addArticleSubscription?: Subscription
  
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private categoriesService: CategoryService
    ){
    this.model= {
      title: '',
      urlHandle: '',
      hero: '',
      thumbnail: '',
      summary: '',
      content: '',
      publishedAt: new Date(),
      isPublished: true,
      isDeleted: false,
      categories: []
    }

  }


  ngOnInit() {
    this.categories$ = this.categoriesService.getAllCategories();
  }

  onFormSubmit(){
    this.addArticleSubscription = this.articleService.addArticle(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/admin-article');
        console.log(response);
      },
    });
  }

  ngOnDestroy(){
    this.addArticleSubscription?.unsubscribe;
  }
}