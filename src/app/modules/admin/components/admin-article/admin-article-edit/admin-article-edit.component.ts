import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/admin-article/article.service';
import { UpdateArticleRequest } from '../../../models/article/article-edit-request.model copy';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Article } from '../../../models/article/article.model';

@Component({
  selector: 'app-admin-article-edit',
  templateUrl: './admin-article-edit.component.html',
  styleUrls: ['./admin-article-edit.component.css']
})
export class AdminArticleEditComponent implements OnInit,OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  editArticleSubscription?: Subscription;
  article?: Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
    ){
    }

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next:(params) => {
        this.id = params.get('id');

        if(this.id){
          this.articleService.getArticleById(this.id)
          .subscribe({
            next: (response) => {
              this.article = response
            }
          });
        }
      }
    });
  }


  onFormSubmit(){
    const UpdateArticleRequest: UpdateArticleRequest = {
      title: this.article?.title ?? '',
      urlHandle: this.article?.urlHandle ?? '',
      hero: this.article?.hero ?? '',
      thumbnail: this.article?.thumbnail ?? '',
      summary: this.article?.summary ?? '',
      content: this.article?.content ?? '',
      publishedAt: new Date(),
      isPublished: this.article?.isPublished ?? true,
      isDeleted: this.article?.isDeleted ?? false
    }

    if (this.id){
      this.editArticleSubscription  = this.articleService.updateArticle(this.id, UpdateArticleRequest)
      .subscribe({
        next: (response) => {
        this.router.navigateByUrl('/admin/admin-article');
        },
      });
    }
  }


  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
    this.editArticleSubscription?.unsubscribe();
  }
}
