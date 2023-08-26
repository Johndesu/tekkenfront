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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminCategoryEditComponent } from './components/admin-category/admin-category-edit/admin-category-edit.component';
import { AdminRoleAddComponent } from './components/admin-role/admin-role-add/admin-role-add.component';
import { AdminRoleDetailComponent } from './components/admin-role/admin-role-detail/admin-role-detail.component';
import { AdminRoleEditComponent } from './components/admin-role/admin-role-edit/admin-role-edit.component';
import { AdminRoleListComponent } from './components/admin-role/admin-role-list/admin-role-list.component';
import { AdminRoleComponent } from './components/admin-role/admin-role.component';
import { AdminArticleEditComponent } from './components/admin-article/admin-article-edit/admin-article-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminTableListModule } from 'src/app/shared/ui/admin-table-list/admin-table-list.module';


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
    AdminCategoryAddComponent,
    AdminCategoryEditComponent,
    AdminRoleAddComponent,
    AdminRoleDetailComponent,
    AdminRoleEditComponent,
    AdminRoleListComponent,
    AdminRoleComponent,
    AdminArticleEditComponent,
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AdminTableListModule
  ]
})
export class AdminModule { }
