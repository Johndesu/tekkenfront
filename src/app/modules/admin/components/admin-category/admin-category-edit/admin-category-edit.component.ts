import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../../models/category/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../../services/admin-category/category.service';
import { UpdateCategoryRequest } from '../../../models/category/category-edit-request.model';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.css']
})
export class AdminCategoryEditComponent implements OnInit, OnDestroy{

  id: string | null = null
  paramsSubscription?: Subscription;
  editCategorySubscription?: Subscription;
  category?: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
    ){}

  ngOnInit() {
   this.paramsSubscription = this.route.paramMap.subscribe({
    next: (params) => {
      this.id = params.get('id');

      if (this.id){
        //get data from the API for this category Id
        this.categoryService.getCategoryById(this.id)
        .subscribe({
          next: (response) => {
            this.category = response
          }
        });
      }
    }
   }); 
  }

  onFormSubmit(){
    const UpdateCategoryRequest: UpdateCategoryRequest = {
      description: this.category?.description ?? '',
      urlHandle: this.category?.urlHandle ?? ''
    };

    if (this.id){
      //pass this object to service
      this.editCategorySubscription = this.categoryService.updateCategory(this.id, UpdateCategoryRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/admin-category');
        }
      });
    }

    
  }

  onDelete(){
    if(this.id){
    this.categoryService.deleteCategory(this.id)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/admin-category');
      }
    });
    }
  }


  ngOnDestroy(){
    this.paramsSubscription?.unsubscribe();
    this.editCategorySubscription?.unsubscribe();
  }

}
