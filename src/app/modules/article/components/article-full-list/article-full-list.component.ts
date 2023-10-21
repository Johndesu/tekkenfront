import { Component, OnInit } from '@angular/core';
import { ArticleListService } from '../../services/article-list/article-list.service';
import { Observable, map } from 'rxjs';
import { Article } from 'src/app/modules/admin/models/article/article.model';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/modules/admin/services/admin-category/admin-category.service';
import { Category } from 'src/app/modules/admin/models/category/category.model';

@Component({
  selector: 'app-article-full-list',
  templateUrl: './article-full-list.component.html',
  styleUrls: ['./article-full-list.component.css']
})
export class ArticleFullListComponent implements OnInit{

  faSearch = faSearch;
  faCaretDown = faCaretDown;
  articles$?: Observable<Article[]>;
  categories$?: Observable<Category[]>;
  searchTerm: string = '';
  isDropdownOpen: boolean = false;
  selectedCategory: string | null = null;
  filteredArticles$?: Observable<Article[] | undefined>;



  constructor(
    private articleService: ArticleListService,
    private categoryService: CategoryService
  ){}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    this.articles$ = this.articleService.getAllArticles();

    //Debug
    console.log(this.selectedCategory);

    this.filteredArticles$ = this.articles$
  }


  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCategory(categoryDescription: string){
    this.selectedCategory = categoryDescription;
    this.filteredArticle(this.selectedCategory);
  }
  
  filteredArticle(selectCategory: string){
    this.filteredArticles$ = this.articles$?.pipe(
      map(articles => {
        if(!this.selectedCategory){
          return articles;
        }
        return articles.filter(article =>
          article.categories.some(category => category.description === selectCategory)
        );
      })
    );
  }


}
