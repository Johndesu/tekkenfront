import { Component, OnDestroy } from '@angular/core';
import { AddArticleRequest } from '../../../models/article/article-add-request.model';
import { ArticleService } from '../../../services/admin-article/article.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-article-add',
  templateUrl: './admin-article-add.component.html',
  styleUrls: ['./admin-article-add.component.css']
})
export class AdminArticleAddComponent implements OnDestroy{

  model: AddArticleRequest;
  private addArticleSubscription?: Subscription
  
  constructor(private articleService: ArticleService, private router: Router){
    this.model= {
      title: '',
      urlHandle: '',
      hero: '',
      thumbnail: '',
      summary: '',
      content: '',
      publishedAt: new Date(),
      isPublished: true,
      isDeleted: false

    }

    }

    onFormSubmit(){
      console.log(this.model);
      this.addArticleSubscription = this.articleService.addArticle(this.model)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('admin/admin-article');
        },
      });
    }

    ngOnDestroy(){
      this.addArticleSubscription?.unsubscribe;
    }
}