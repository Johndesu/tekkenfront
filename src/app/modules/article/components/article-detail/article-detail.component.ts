import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleListService } from '../../services/article-list/article-list.service';
import { ArticleDetailService } from '../../services/article-detail/article-detail.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/modules/admin/models/article/article.model';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Register the Portuguese locale data
registerLocaleData(localePt);

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  template: `
    {{ article.publishedAt | date: 'd MMMM, y' : locale }}
  `,
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }]
})
export class ArticleDetailComponent implements OnInit{

  url: string | null = null;
  article$?: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private articleDetailService: ArticleDetailService
  ){}
  

  ngOnInit(){
    this.route.paramMap
      .subscribe({
        next: (params) => {
          this.url = params.get('url');
        }
      });
    
    // Fetch Article Details by Url
    if(this.url){
      this.article$ = this.articleDetailService.getArticleByUrl(this.url);
    }
  }

}
