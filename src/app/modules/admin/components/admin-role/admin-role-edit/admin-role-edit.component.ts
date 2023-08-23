import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../../../services/admin-role/role.service';
import { Role } from '../../../models/role/role.model';
import { Subscription } from 'rxjs';
import { UpdateRoleRequest } from '../../../models/role/role-edit-request.model';

@Component({
  selector: 'app-admin-role-edit',
  templateUrl: './admin-role-edit.component.html',
  styleUrls: ['./admin-role-edit.component.css']
})
export class AdminRoleEditComponent implements OnInit, OnDestroy{

  id: string | null = null
  paramsSubscription?: Subscription;
  editRoleSubscription?: Subscription;
  role?: Role;

  constructor(
    private route: ActivatedRoute,
    private roleService: RoleService,
    private router: Router
    ){}

  ngOnInit() {
   this.paramsSubscription = this.route.paramMap.subscribe({
    next: (params) => {
      this.id = params.get('id');

      if (this.id){
        //get data from the API for this role Id
        this.roleService.getRoleById(this.id)
        .subscribe({
          next: (response) => {
            this.role = response
          }
        });
      }
    }
   }); 
  }

  onFormSubmit(){
    const UpdateRoleRequest: UpdateRoleRequest = {
      description: this.role?.description ?? '',
    };

    if (this.id){
      //pass this object to service
      this.editRoleSubscription = this.roleService.updateRole(this.id, UpdateRoleRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/admin-role');
        }
      });
    }

    
  }

  onDelete(){
    if(this.id){
    this.roleService.deleteRole(this.id)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/admin-role');
      }
    });
    }
  }


  ngOnDestroy(){
    this.paramsSubscription?.unsubscribe();
    this.editRoleSubscription?.unsubscribe();
  }

}
