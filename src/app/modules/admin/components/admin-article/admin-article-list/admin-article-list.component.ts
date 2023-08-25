import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../../models/article/article.model';
import { ArticleService } from '../../../services/admin-article/article.service';

@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.css']
})
export class AdminArticleListComponent {
  roles$?: Observable<Article[]>;

  constructor(private articleService: ArticleService){  
  }

  ngOnInit(): void{
    this.roles$ = this.articleService.getAllArticles();
  }
}
