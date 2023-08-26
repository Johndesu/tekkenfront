import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/admin-category/category.service';
import { Observable, Subscription, map } from 'rxjs';
import { Category } from '../../../models/category/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit, OnDestroy {

  category$?: Observable<Category[]>;
  deleteCategorySubscription?: Subscription;

  columns = [
    {key: 'description', label: 'Titulo'},
    {key: 'urlHandle', label: 'Url'},
  ];

  constructor(
    private categoryService: CategoryService,
    private router: Router
    ){}

  ngOnInit(){
    this.category$ = this.categoryService.getAllCategories();
  }

  onEdit(id: number){
    this.router.navigate([`/admin/admin-category-edit/${id}`]);
  }

  onDelete(id: number){
    this.deleteCategorySubscription = this.categoryService.deleteCategory(id.toString())
    .subscribe({
      next: (response)=> {
        if(this.category$){
          this.category$ = this.category$?.pipe(
            map(categories => categories.filter(category => category.id !== id))
          );
        }
        console.log("Category " + id + " deleted.");
      }
    })
    
  }

  ngOnDestroy(){
    this.deleteCategorySubscription?.unsubscribe();
  }

}
