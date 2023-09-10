import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ArticleImage } from '../../models/article-image.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  selectedImage: BehaviorSubject<ArticleImage> = new BehaviorSubject<ArticleImage>({
    id: '',
    fileExtension: '',
    fileName: '',
    title: '',
    url: ''
  });

  constructor(
    private http: HttpClient

  ) {}

  getAllImages(): Observable<ArticleImage[]>{
    return this.http.get<ArticleImage[]>(`${environment.apiBaseUrl}/api/images`);
  }

  uploadImage(file: File, fileName: string, title: string): Observable<ArticleImage>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('title', title);

    return this.http.post<ArticleImage>(`${environment.apiBaseUrl}/api/images`, formData);
  }

  selectImage(image: ArticleImage){
    this.selectedImage.next(image)
  }

  onSelectImage(): Observable<ArticleImage> {
    return this.selectedImage.asObservable()
  }

  deleteImage(id: string): Observable<ArticleImage> {
    return this.http.delete<ArticleImage>(`${environment.apiBaseUrl}/api/images/${id}`);
  }
}
