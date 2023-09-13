import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/public/home/home.component';
import { ArticleDetailComponent } from './modules/article/components/article-detail/article-detail.component';
import { NoticiasComponent } from './modules/public/noticias/noticias.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'noticias',
    component : NoticiasComponent,
  },
  {
    path: 'noticias/:url',
    component: ArticleDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
