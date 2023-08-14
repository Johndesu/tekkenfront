import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/admin-category/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category/category.model';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  categories$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService){  
  }

  ngOnInit(): void{
    this.categories$ = this.categoryService.getAllCategories();
  }

}
