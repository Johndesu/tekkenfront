import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './ui/input/input.module';
import { ImageSelectorComponent } from './ui/image-selector/image-selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ImageSelectorComponent
  ],
  imports: [
    CommonModule, InputModule, FontAwesomeModule, FormsModule
  ],
  exports: [
    ImageSelectorComponent
  ]
})
export class SharedModule { }
