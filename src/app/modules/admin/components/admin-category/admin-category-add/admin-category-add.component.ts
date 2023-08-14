import { Component } from '@angular/core';
import { AdminAddCategoryRequest } from '../../../models/admin-category/admin-category-add-request';
import { CategoryService } from '../../../services/admin-category/category.service';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent {
  model: AdminAddCategoryRequest;

  constructor(private categoryService: CategoryService){
    this.model = {
      description: ''
    }
  }

  onFormSubmit(){
    console.log(this.model);
    this.categoryService.addCategory(this.model)
    .subscribe({
      next:(response) =>{
        console.log('This was successful!');
      }
    });
  }
}
