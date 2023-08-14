import { Component } from '@angular/core';
import { AdminAddArticleRequest } from '../../../models/article/article-add-request.model';
import { ArticleService } from '../../../services/admin-article/article.service';


@Component({
  selector: 'app-admin-article-add',
  templateUrl: './admin-article-add.component.html',
  styleUrls: ['./admin-article-add.component.css']
})
export class AdminArticleAddComponent {
  model: AdminAddArticleRequest;
  
  constructor(private articleService: ArticleService){
    this.model= {
      title: '',
      hero: '',
      thumbnail: '',
      summary: '',
      content: '',
      publishedAt: Date.now(),
      isPublished: true,

    }

    }

    onFormSubmit(){
      console.log(this.model);
      this.articleService.addArticle(this.model)
      .subscribe({
        next: (response) => {
          console.log('This was susccessful!');
        },
      });
    }
}