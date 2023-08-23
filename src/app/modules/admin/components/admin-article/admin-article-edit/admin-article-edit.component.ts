import { Component } from '@angular/core';
import { ArticleService } from '../../../services/admin-article/article.service';
import { UpdateArticleRequest } from '../../../models/article/article-edit-request.model copy';

@Component({
  selector: 'app-admin-article-edit',
  templateUrl: './admin-article-edit.component.html',
  styleUrls: ['./admin-article-edit.component.css']
})
export class AdminArticleEditComponent {

  model: UpdateArticleRequest

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
      this.articleService.addArticle(this.model)
      .subscribe({
        next: (response) => {
          console.log('This was susccessful!');
        },
      });
    }
}
