import { Component, OnDestroy } from '@angular/core';
import { RoleService } from '../../../services/admin-role/role.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddRoleRequest } from '../../../models/role/role-add-request.model';

@Component({
  selector: 'app-admin-role-add',
  templateUrl: './admin-role-add.component.html',
  styleUrls: ['./admin-role-add.component.css']
})
export class AdminRoleAddComponent implements OnDestroy{
  model: AddRoleRequest;
  private addRoleSubscription?: Subscription


  constructor(private roleService: RoleService,private router: Router){
    this.model = {
      description: '',
    }
  }

  onFormSubmit(){
    this.addRoleSubscription = this.roleService.addRole(this.model)
    .subscribe({
      next:(response) =>{
        this.router.navigateByUrl('admin/admin-role');
      }
    });
  }

  ngOnDestroy(): void {
    this.addRoleSubscription?.unsubscribe();
  }
}
