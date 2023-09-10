import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { faXmark, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from '../../services/image/image.service';
import { Observable, Subscription, map } from 'rxjs';
import { ArticleImage } from '../../models/article-image.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit, OnDestroy{

  faXmark = faXmark;
  faPlus = faPlus;
  faTrash = faTrash;

  isImageSelectorVisible: boolean = false;
  private file?: File;
  fileName: string = '';
  title: string = '';
  images$?: Observable<ArticleImage[]>;

  deleteImageSubscription?: Subscription


  @ViewChild('form', { static: false }) imageUploadForm?: NgForm;

  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(
    private imageService: ImageService
  ){}
  
  ngOnInit() {
    this.getImages();
  }

  closeModal(){
    this.closeModalEvent.emit();
  }

  onFileUploadChange(event: Event){
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }

  uploadImage(){
    if (this.file && this.fileName !== '' && this.title !== '') {
      // Image service to upload the image
      this.imageService.uploadImage(this.file, this.fileName, this.title)
      .subscribe({
        next: (response) => {
          this.imageUploadForm?.resetForm();
          this.getImages();
        }
      });
    }
  }

  selectImage(image: ArticleImage){
    this.imageService.selectImage(image);
  }

  deleteImage(id:string){
    this.deleteImageSubscription = this.imageService.deleteImage(id)
    .subscribe({
      next: (response) => {
        if (this.images$){
          this.images$ = this.images$.pipe(
            map(images => images.filter(image => image.id ! == id))
          );
        }
        this.imageUploadForm?.resetForm();
        this.getImages();
        console.log(this.isImageSelectorVisible);
        console.log("Image " + id + " deleted.");
      }
    });
  }

  ngOnDestroy(){
    this.deleteImageSubscription?.unsubscribe();
  }

  private getImages(){
    this.images$ = this.imageService.getAllImages();
  }

}
