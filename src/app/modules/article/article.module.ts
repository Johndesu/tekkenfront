import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleComponent } from './article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ArticleFullListComponent } from './components/article-full-list/article-full-list.component';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleFullListComponent,    
  ],
  exports:[
    ArticleComponent,
    ArticleListComponent,
    ArticleFullListComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class ArticleModule { }
