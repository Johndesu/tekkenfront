import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTableListComponent } from './admin-table-list/admin-table-list.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [AdminTableListComponent],
  exports: [AdminTableListComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class AdminTableListModule { }
