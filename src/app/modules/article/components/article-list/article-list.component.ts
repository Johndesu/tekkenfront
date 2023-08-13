import { Component } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {

  hero: string = 'Hero'
  thumbnail: string = 'Thumbnail'
  title: string = 'Title'
  summary: string = 'Summary'
  publishedAt: number = Date.now()

}
