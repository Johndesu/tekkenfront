import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../../models/category/category-add-request.model';
import { Observable } from 'rxjs';
import { Category } from '../../models/category/category.model';
import { environment } from 'src/environments/environment.development';
import { UpdateCategoryRequest } from '../../models/category/category-edit-request.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private coookieService: CookieService
    ) { }

  addCategory(model: AddCategoryRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/category`, model);
  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/category`);
  }

  getCategoryById(id: string): Observable<Category>{
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/category/${id}`);
  }

  updateCategory(id:string, UpdateCategoryRequest:UpdateCategoryRequest): Observable<Category>{
    return this.http.put<Category>(`${environment.apiBaseUrl}/api/category/${id}?addAuth=true`, UpdateCategoryRequest);
  }

  deleteCategory(id:string){
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/category/${id}?addAuth=true`);
  }
}
