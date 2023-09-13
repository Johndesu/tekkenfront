import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Article } from '../../../models/article/article.model';
import { AdminArticleService } from '../../../services/admin-article/admin-article.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.css']
})
export class AdminArticleListComponent implements OnInit, OnDestroy{

  article$?: Observable<Article[]>;
  deleteArticleSubscription?: Subscription

  columns = [
    {key: 'title', label: 'Titulo'},
    {key: 'urlHandle', label: 'Url'},
    {key: 'categories', label: 'Categoria'}
  ];


  constructor(
    private articleService: AdminArticleService,
    private router: Router
    ){}

  ngOnInit(){
    this.article$ = this.articleService.getAllArticles();
  }

  onEdit(id: number){
    this.router.navigate([`/admin/admin-article-edit/${id}`]);
  }

  onDelete(id: number){
    this.deleteArticleSubscription = this.articleService.deleteArticle(id.toString())
      .subscribe({
        next: (response) => {
          if (this.article$) {
            this.article$ = this.article$.pipe(
              map(articles => articles.filter(article => article.id !== id))
            );
          }
          console.log("Article " + id + " deleted.");
        }
      });
  }
  

  ngOnDestroy(){
    this.deleteArticleSubscription?.unsubscribe();
  }
}
