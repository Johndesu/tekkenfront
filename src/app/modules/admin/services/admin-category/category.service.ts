import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminAddCategoryRequest } from '../../models/admin-category/admin-category-add-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AdminAddCategoryRequest): Observable<void>{
    return this.http.post<void>('https://localhost:7246/api/category', model);
  }
}
