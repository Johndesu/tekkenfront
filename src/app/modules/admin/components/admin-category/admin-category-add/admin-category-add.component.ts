import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../../../models/category/category-add-request.model';
import { CategoryService } from '../../../services/admin-category/admin-category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription


  constructor(private categoryService: CategoryService,private router: Router){
    this.model = {
      description: '',
      urlHandle: ''
    }
  }

  onFormSubmit(){
    this.addCategorySubscription = this.categoryService.addCategory(this.model)
    .subscribe({
      next:(response) =>{
        this.router.navigateByUrl('admin/admin-category');
      }
    });
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
