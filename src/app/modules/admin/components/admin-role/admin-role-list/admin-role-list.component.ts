import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoleService } from '../../../services/admin-role/role.service';
import { Role } from '../../../models/role/role.model';
import { Observable, Subscription, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-role-list',
  templateUrl: './admin-role-list.component.html',
  styleUrls: ['./admin-role-list.component.css']
})
export class AdminRoleListComponent implements OnInit, OnDestroy{

  role$?: Observable<Role[]>;
  deleteRoleSubscription?: Subscription;

  columns = [
    {key: 'description', label: 'Nome'},
  ];

  constructor(
    private roleService: RoleService,
    private router: Router
    ){}

  ngOnInit(): void{
    this.role$ = this.roleService.getAllCategories();
  }

  onEdit(id: number){
    this.router.navigate([`/admin/admin-role-edit/${id}`]);
  }

  onDelete(id: number){
    this.deleteRoleSubscription = this.roleService.deleteRole(id.toString())
    .subscribe({
      next: (response)=> {
        if(this.role$){
          this.role$ = this.role$?.pipe(
            map(roles => roles.filter(role => role.id !== id))
          );
        }
        console.log("Role " + id + " deleted.");
      }
    })
    
  }

  ngOnDestroy(){
    this.deleteRoleSubscription?.unsubscribe();
  }
}
