import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleComponent } from './article.component';
import { AdminComponent } from '../admin/admin.component';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    
  ],
  exports:[
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
