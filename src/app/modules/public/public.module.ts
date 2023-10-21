import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NoticiasComponent } from './noticias/noticias.component';
import { HomeComponent } from './home/home.component';
import { ArticleModule } from '../article/article.module';



@NgModule({
  declarations: [
    HomeComponent,
    NoticiasComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ArticleModule
  ],
  exports: [
    HomeComponent,
    NoticiasComponent,
  ]
})
export class PublicModule { }
