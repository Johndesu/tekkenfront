import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminAddCategoryRequest } from '../../models/category/category-add-request.model';
import { Observable } from 'rxjs';
import { Category } from '../../models/category/category.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AdminAddCategoryRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/category`, model);
  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/category`);
  }
}
