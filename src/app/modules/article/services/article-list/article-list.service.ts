import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/modules/admin/models/article/article.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {

  constructor(
    private http : HttpClient
  ) { }


  getAllArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${environment.apiBaseUrl}/api/article`);
  }

  getArticleById(id: string): Observable<Article>{
    return this.http.get<Article>(`${environment.apiBaseUrl}/api/article/${id}`);
  }
}
