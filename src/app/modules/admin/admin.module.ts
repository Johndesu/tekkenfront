import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminArticleComponent } from './components/admin-article/admin-article.component';
import { AdminArticleListComponent } from './components/admin-article/admin-article-list/admin-article-list.component';
import { AdminArticleDetailComponent } from './components/admin-article/admin-article-detail/admin-article-detail.component';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { AdminCategoryListComponent } from './components/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryDetailComponent } from './components/admin-category/admin-category-detail/admin-category-detail.component';
import { AdminArticleAddComponent } from './components/admin-article/admin-article-add/admin-article-add.component';
import { AdminCategoryAddComponent } from './components/admin-category/admin-category-add/admin-category-add.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminArticleComponent,
    AdminArticleListComponent,
    AdminArticleDetailComponent,
    AdminCategoryComponent,
    AdminCategoryListComponent,
    AdminCategoryDetailComponent,
    AdminArticleAddComponent,
    AdminCategoryAddComponent
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
