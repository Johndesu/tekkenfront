import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-table-list',
  templateUrl: './admin-table-list.component.html',
  styleUrls: ['./admin-table-list.component.css']
})
export class AdminTableListComponent {
  

  @Input() observableData$: Observable<any[]> | undefined; //Data for the component
  @Input() columns: {key:string, label:string}[] = [];
  @Input() addLink: string = ''; // Link for the "Add" button
  @Input() editLink: string = ''; //  Link for the "Edit" button
  @Input() addButtonLabel: string = ''; // Label for the "Add" button

  @Output() deleteItem = new EventEmitter<number>();
  @Output() editItem = new EventEmitter<number>();

  onEdit(observableId: number){
    this.editItem.emit(observableId)
  }

  onDelete(observableId: number){
    if(confirm("Tens a certeza que queres elimiar?")){
      this.deleteItem.emit(observableId);
    }
  }
}
