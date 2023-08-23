import { Component, OnDestroy } from '@angular/core';
import { AddArticleRequest } from '../../../models/article/article-add-request.model';
import { ArticleService } from '../../../services/admin-article/article.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-article-add',
  templateUrl: './admin-article-add.component.html',
  styleUrls: ['./admin-article-add.component.css']
})
export class AdminArticleAddComponent implements OnDestroy{

  model: AddArticleRequest;
  private addArticleSubscription?: Subscription
  
  constructor(private articleService: ArticleService){
    this.model= {
      title: '',
      urlHandle: '',
      hero: '',
      thumbnail: '',
      summary: '',
      content: '',
      publishedAt: Date.now(),
      isPublished: true,
      isDeleted: false

    }

    }

    onFormSubmit(){
      console.log(this.model);
      this.addArticleSubscription = this.articleService.addArticle(this.model)
      .subscribe({
        next: (response) => {
          console.log('This was susccessful!');
        },
      });
    }

    ngOnDestroy(){
      this.addArticleSubscription?.unsubscribe;
    }
}