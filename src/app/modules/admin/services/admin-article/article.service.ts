import { Injectable } from '@angular/core';
import { AddArticleRequest } from '../../models/article/article-add-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Article } from '../../models/article/article.model';
import { UpdateArticleRequest } from '../../models/article/article-edit-request.model copy';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  addArticle(model: AddArticleRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/article`, model);
  }

  getAllArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${environment.apiBaseUrl}/api/article`);
  }

  getArticleById(id: string): Observable<Article>{
    return this.http.get<Article>(`${environment.apiBaseUrl}/api/article/${id}`);
  }

  updateArticle(id:string, UpdateArticleRequest:UpdateArticleRequest): Observable<Article>{
    console.log('articleService.updateArticle(): ' + UpdateArticleRequest)
    return this.http.put<Article>(`${environment.apiBaseUrl}/api/article/${id}`, UpdateArticleRequest);
  }

  deleteArticle(id:string){
    return this.http.delete<Article>(`${environment.apiBaseUrl}/api/article/${id}`);
  }

}
