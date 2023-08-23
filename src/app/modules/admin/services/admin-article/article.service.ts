import { Injectable } from '@angular/core';
import { AddArticleRequest } from '../../models/article/article-add-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  addArticle(model: AddArticleRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7246/api/article', model);
  }

}
