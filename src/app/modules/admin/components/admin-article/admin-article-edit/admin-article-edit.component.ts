import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminArticleService } from '../../../services/admin-article/admin-article.service';
import { UpdateArticleRequest } from '../../../models/article/article-edit-request.model';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../../models/article/article.model';
import { CategoryService } from '../../../services/admin-category/admin-category.service';
import { Category } from '../../../models/category/category.model';
import { ImageService } from 'src/app/shared/services/image/image.service';

@Component({
  selector: 'app-admin-article-edit',
  templateUrl: './admin-article-edit.component.html',
  styleUrls: ['./admin-article-edit.component.css']
})
export class AdminArticleEditComponent implements OnInit,OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  editArticleSubscription?: Subscription;
  getArticleSubscription?: Subscription;
  imageSelectSubscription?: Subscription;
  article?: Article;
  categories$?: Observable<Category[]>
  selectedCategories?: string[];
  isImageSelectorVisible: boolean = false;


  constructor(
    private articleService: AdminArticleService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private imageService: ImageService
    ){
    }

  ngOnInit() {
    this.categories$ = this.categoryService.getAllCategories();

    this.paramsSubscription = this.route.paramMap.subscribe({
      next:(params) => {
        this.id = params.get('id');

        if(this.id){
          this.getArticleSubscription = this.articleService.getArticleById(this.id)
          .subscribe({
            next: (response) => {
              this.article = response;
              this.selectedCategories = response.categories.map(x => x.id.toString());
            }
          });
        }
      }
    });

    this.imageSelectSubscription = this.imageService.onSelectImage()
    .subscribe({
      next: (response) => {
        if(this.article) {
          console.log(response.url);
          this.article.hero = response.url;
          this.isImageSelectorVisible = false;
        }
      }
    });
  }

  openImageSelector(){
    this.isImageSelectorVisible = true;
  }


  onFormSubmit(){
    console.log('Selected Categories:', this.selectedCategories);

    const UpdateArticleRequest: UpdateArticleRequest = {
      title: this.article?.title ?? '',
      urlHandle: this.article?.urlHandle ?? '',
      hero: this.article?.hero ?? '',
      thumbnail: this.article?.thumbnail ?? '',
      summary: this.article?.summary ?? '',
      content: this.article?.content ?? '',
      publishedAt: new Date(),
      isPublished: this.article?.isPublished ?? true,
      isDeleted: this.article?.isDeleted ?? false,
      categories: this.selectedCategories ?? []
    };

    console.log(UpdateArticleRequest);

    if (this.id){
      this.editArticleSubscription  = this.articleService.updateArticle(this.id, UpdateArticleRequest)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigateByUrl('/admin/admin-article');
        },
      });
    }
  }


  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
    this.editArticleSubscription?.unsubscribe();
    this.getArticleSubscription?.unsubscribe();
    this.imageSelectSubscription?.unsubscribe();
  }
}
