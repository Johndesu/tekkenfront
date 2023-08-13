import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './modules/article/article.component';

const routes: Routes = [
  {
    path: 'noticias',
    component : ArticleComponent,
    loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
